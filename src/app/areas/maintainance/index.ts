import { Shared } from '@shared';
import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

const MAINTAINCE_PATH = 'maintainance';
const LibRouter = Shared.Lib.Router;
const redirect = LibRouter.redirectIfRouteMatched(MAINTAINCE_PATH);

export const Area = {
  path: MAINTAINCE_PATH,
  component: AreaFrame,
  redirect,

  meta: {
    isArea: {
      maintainance: true,
    },  
  },

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
};
