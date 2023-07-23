import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      account: true,
    },  
  },

  children: [
    {
      path: '',
      component: Pages.Account.ApplyExists,
    },
  
    {
      path: 'apply-new',
      component: Pages.Account.ApplyNew,
    },
  ],
};