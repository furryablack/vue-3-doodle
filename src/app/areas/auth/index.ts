import { AreaFrame } from './area-frame';
import { routes } from './dashboard.routes';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      auth: true,
    },  
  },

  children: routes,
};
