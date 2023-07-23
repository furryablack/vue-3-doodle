import { Shared } from '@shared';
import { routes as planned } from './planned.routes';
import { routes as unplanned } from './unplanned.routes';

const MAINTAINCE_PATH = 'maintainance';
const LibRouter = Shared.Lib.Router;

export const routes = [
  {
    path: MAINTAINCE_PATH,
    redirect: LibRouter.redirectIfRouteMatched(MAINTAINCE_PATH),

    children: [
      {
        path: '',
        children: unplanned,
      },

      {
        path: '',
        children: planned,
      },
    ],
  },
];
