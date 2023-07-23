import { AreaFrame } from './area-frame';
import { User, Dashboard } from '@app/areas';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      auth: true,
    },  
  },
  
  children: [
    {
      path: '',
      children: [Dashboard], 
    },

    {
      path: 'user',
      children: [User], 
    },
  ],
};
