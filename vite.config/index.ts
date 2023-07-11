import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { Lib as ViteLib } from './lib';
import { PATHS } from './paths';

export default defineConfig((init: { mode: string; }) => {
  ViteLib.loadViteEnv(init.mode);
  const PROD = init.mode === 'production';
  const DEV = init.mode === 'development';

  return {
    root: PATHS.PROJECT_ROOT,
    publicDir: 'static',

    resolve: {
      alias: ViteLib.makeAliases(),
    },

    test: {
      environment: 'happy-dom',
      include: ['./src/**/*.spec.ts'],
      reporters: ['default', 'html'],
    },

    build: {
      target: 'es2021',
      minify: PROD ? 'esbuild' : undefined,
      assetsDir: 'app',

      rollupOptions: {
        input: {
          entry: PATHS.APP_INDEX_HTML,
        },

        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',

          manualChunks(chunkPath: string) {
            if (chunkPath.includes('node_modules/')) {
              return 'vendors';
            }
          },
        },
      },
    },

    server: {
      port: Number(process.env.VITE_SERVER_PORT),
      host: process.env.VITE_SERVER_HOST,
      base: process.env.VITE_SERVER_BASE,
    },

    plugins: [
      vue(),

      eslint({ 
        exclude: ['/node_modules/', '/dist/'],
        failOnError: !DEV,
        failOnWarning: !DEV,
      }),
      
      checker({ vueTsc: Boolean(process.env.VITE_SERVER_USE_VUE_TSC) }),

      createHtmlPlugin({
        minify: PROD && Boolean(process.env.VITE_APP_USE_MINIFY),

        inject: {
          data: {
            title: process.env.VITE_APP_TITLE,
            app: `<script type="module" src="${PATHS.APP_INDEX_ENTRY}"></script>`,
          },
        },
      }),
    ],
  };
});
