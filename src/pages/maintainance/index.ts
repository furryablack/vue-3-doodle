import { Pages } from './pages';

export const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: Pages.NotFound,
  },

  {
    path: 'service-unavailable',
    component: Pages.ServiceUnavailable,
  },
];
