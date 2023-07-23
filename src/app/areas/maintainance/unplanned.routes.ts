import { Pages } from '@pages';

export const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: Pages.Maintainance.NotFound,
  },
];
