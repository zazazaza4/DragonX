import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SINGLE_ROUTE,
} from "../utils/consts";
import { IRoute } from "../interfaces/route.interface";
import Single from "../pages/Single/Single";

export const publicRoutes: IRoute[] = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: SINGLE_ROUTE,
    Component: Single,
  },
];
