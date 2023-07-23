import { Shared } from '@shared';
import { Pages } from '@pages';

const MAINTAINCE_PATH = 'maintainance';
const LibRouter = Shared.Lib.Router;

export const routes = [
  {
    path: MAINTAINCE_PATH,
    redirect: LibRouter.redirectIfRouteMatched(MAINTAINCE_PATH),

    children: [
      {
        path: '/:pathMatch(.*)*',
        component: Pages.Maintainance.NotFound,
      },

      {
        path: 'service-unavailable',
        component: Pages.Maintainance.ServiceUnavailable,
      },
    ],
  },
];
