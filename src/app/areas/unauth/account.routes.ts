import { Pages } from '@pages';

export const routes = [
  {
    path: '',
    component: Pages.Account.ApplyExists,
  },

  {
    path: 'apply-new',
    component: Pages.Account.ApplyNew,
  },
];