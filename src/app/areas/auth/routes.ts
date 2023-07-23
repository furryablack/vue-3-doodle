import { routes as dashboard } from './dashboard.routes';
import { routes as user } from './user.routes';

export const routes = [
  {
    path: '',
    children: dashboard,
  },

  {
    path: 'user',
    children: user,
  },
];