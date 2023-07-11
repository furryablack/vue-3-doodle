import { PagesArea } from '@pages';
import { Shared } from '@shared';
import { Frame } from './frame';

const MAINTAINCE_PATH = 'maintainance';
const LibRouter = Shared.Lib.Router;

export const Area = {
  path: '',
  component: Frame,

  meta: {
    isArea: {
      maintainance: true,
    },  
  },

  children: [
    {
      path: MAINTAINCE_PATH,
      redirect: LibRouter.redirectIfRouteMatched(MAINTAINCE_PATH),
      children: PagesArea.Maintainance,
    },
  ],
};
