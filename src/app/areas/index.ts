import { Frame } from './frame';
import { Area as Auth } from './auth';
import { Area as Unauth } from './unauth';
import { Area as Maintainance } from './maintainance';

export const Area = {
  path: '',
  component: Frame,

  children: [
    Auth,
    Unauth,
    Maintainance,
  ],
};