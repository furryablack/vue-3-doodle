import { Pages } from '@pages';

export const routes = [
  {
    path: '',
    component: Pages.User.Profile,
  },

  {
    path: 'login-history',
    component: Pages.User.LoginHistory,
  },
];
