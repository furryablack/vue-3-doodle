import { Pages } from './pages';

export const routes = [
  {
    path: '',
    component: Pages.SignIn,
  },

  {
    path: 'sign-up',
    component: Pages.SignUp,
  },
];