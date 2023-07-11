import { createApp as createVueApp } from 'vue';
import { Area } from './areas';
import { initWith } from './init-with';
import { RootFrame } from './root-frame';

interface IParams {
  baseUrl: string,
  strict: boolean,
  performance: boolean,
}

export function createApp(params: IParams) {
  const app = createVueApp(RootFrame);
  app.config.performance = params.performance;

  const { router } = initWith.router({ 
    app, 
    area: Area, 
    baseUrl: params.baseUrl,
  });

  const isReady = router.isReady();
  const mount = app.mount;
  return { mount, isReady };
}

