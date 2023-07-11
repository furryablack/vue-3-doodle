import { PagesArea } from '@pages';
import { Frame } from './frame';

export const Area = {
  path: '',
  component: Frame,

  meta: {
    isArea: {
      auth: true,
    },  
  },

  children: [
    {
      path: '',
      children: PagesArea.Dashboard,
    },    
    
    {
      path: 'user',
      children: PagesArea.User,
    },
  ],
};
