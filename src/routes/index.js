import { useRoutes } from 'react-router-dom';
import HomeRoutes from './home';

export default function Routes() {
  let routes = [HomeRoutes];
  return useRoutes(routes);
}
