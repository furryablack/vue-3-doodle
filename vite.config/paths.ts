import { Lib as ProjectLib } from '../lib';

const PATHS: Record<string, string> = {};
PATHS.PROJECT_ROOT = ProjectLib.IO.resolveRealPath('./');
PATHS.APP_ENVIRONMENT = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/environment`);
PATHS.APP_SOURCE = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/src`);
PATHS.APP_INDEX_ENTRY = `./src/app/main.ts`;
PATHS.APP_INDEX_HTML = ProjectLib.IO.normalizePath(`${PATHS.PROJECT_ROOT}/index.html`);

export { PATHS };
