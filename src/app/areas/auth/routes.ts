import { routes as dashboard } from './dashboard.routes';
import { routes as user } from './user.routes';

export const routes = [
  {
    path: '',
    children: dashboard,

    meta: {
      isAreaScope: {
        dashboard: true,
      },  
    },
  },

  {
    path: 'user',
    children: user,
    
    meta: {
      isAreaScope: {
        user: true,
      },  
    },
  },
];