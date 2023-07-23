import { AreaFrame } from './area-frame';
import { routes } from './routes'; 

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      unauth: true,
    },    
  },

  children: routes,
};
