import Main from "../pages/Main/Main";
import { MAIN_ROUTE, SINGLE_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { IRoute } from "../interfaces/route.interface";
import Single from "../pages/Single/Single";
import Profile from "../pages/Profile/Profile";

export const privateRoutes: IRoute[] = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: SINGLE_ROUTE,
    Component: Single,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];
