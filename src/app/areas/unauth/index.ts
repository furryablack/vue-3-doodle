import { Account } from '@app/areas';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      unauth: true,
    },    
  },

  children: [
    {
      path: 'account',
      children: [Account],
    },    
  ],
};
