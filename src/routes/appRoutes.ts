import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: true,
  },
];

export default appRoutes;
