import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';
import login from '@Views/Dashboard/login';
import about from '@Views/Dashboard/about';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
  },
  {
    path: '/about',
    name: 'smt',
    component: about
  },
  
];

export default appRoutes;
