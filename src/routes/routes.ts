import { SINGLE_ROUTE, PROFILE_ROUTE, DRAGONS_ROUTE, DRAGON_ROUTE } from '../utils/consts';
import { IRoute } from '../interfaces/route.interface';
import Single from '../pages/Single/Single';
import Profile from '../pages/Profile/Profile';
import Dragons from '../pages/Dragons/Dragons';

export const privateRoutes: IRoute[] = [
  {
    path: DRAGONS_ROUTE,
    Component: Dragons
  },
  {
    path: DRAGON_ROUTE,
    Component: Single
  },
  {
    path: SINGLE_ROUTE,
    Component: Single
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile
  }
];
