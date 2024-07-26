import Home from "./Home";
import Catalog from "./Catalog";
import News from "./News";
import AboutUs from "./AboutUs";
import NotFound from "../notfound/NotFound";
import Login from "../profile/Login";
import Register from "../profile/Register";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/catalog",
    element: Catalog,
  },
  {
    path: "/news",
    element: News,
  },
  {
    path: "/aboutus",
    component: AboutUs,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "*",
    component: NotFound,
  },
];
