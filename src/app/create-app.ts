import { createApp as createVueApp, defineAsyncComponent } from 'vue';
import { initWith } from './init-with';
import { area } from './area';

interface IParams {
  baseUrl: string,
  strict: boolean,
  performance: boolean,
}

const viewport = defineAsyncComponent(() => import('./viewport.vue'));

export function createApp(params: IParams) {
  const app = createVueApp(viewport);
  const router = initWith.router({ app, area, baseUrl: params.baseUrl });
  const isReady = router.isReady();
  const mount = app.mount;

  app.config.performance = params.performance;

  return { mount, isReady };
}

