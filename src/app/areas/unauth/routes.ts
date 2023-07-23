import { routes as account } from './account.routes';

export const routes = [
  {
    path: 'account',
    children: account,
  },
];