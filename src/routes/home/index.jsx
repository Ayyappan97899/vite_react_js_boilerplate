import AppLoadable from 'src/components/AppLoadable';
import { HOME_ROUTE } from './url';
import { lazy } from 'react';

const HomePage = AppLoadable(lazy(() => import('src/pages/home/index.jsx')));

const HomeRoutes = {
  children: [
    {
      path: HOME_ROUTE,
      element: <HomePage />,
    },
  ],
};

export default HomeRoutes;
