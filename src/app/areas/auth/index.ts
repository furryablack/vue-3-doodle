import { Dashboard, User  } from '@app/areas/internal';
import { AreaFrame } from './area-frame';

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
      path: 'user',
      children: [User], 
    },

    {
      path: '',
      children: [Dashboard], 
    },
  ],
};
