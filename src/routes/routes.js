import { lazy } from "react";
import { HOME } from "./constRoute";
const Home = lazy(() => import("../containers/home"));

const routes = [
  {
    path: HOME,
    Component: Home,
    exact: true,
  },
];

export default routes;
