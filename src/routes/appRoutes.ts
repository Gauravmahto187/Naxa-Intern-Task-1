import Dashboard from '@Views/Dashboard';
import Authentication from '@Views/Authentication';
import { IRoute } from './types';

const appRoutes: IRoute[] = [
  {
    path: '/login',
    name: 'Login',
    component: Authentication,
    authenticated: false,
  },
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: true,
  },
];

export default appRoutes;
