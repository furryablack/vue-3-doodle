import { PagesArea } from '@pages';
import { Frame } from './frame';

export const Area = {
  path: '',
  component: Frame,

  meta: {
    isArea: {
      unauth: true,
    },    
  },

  children: [
    {
      path: 'account',
      children: PagesArea.Account,
    },
  ],
};
