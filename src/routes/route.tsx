import MainLayout from "../layout/MainLayout";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Tutoral from "../pages/tutorial/Tutoral";
import { createBrowserRouter } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import TutorialDetails from "../pages/tutorial/TutorialDetails";

export interface LocalRouteProps {
  path: string;
  name?: string;
  element: JSX.Element;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  children?: LocalRouteProps[];
  index?: boolean;
}

const NoSideBarRoute: any[] = [
  {
    name: "Auth",
    path: "/auth",
    element: <Auth />,
  },
  {
    name: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        name: "Tutorial Details",
        path: "/tutorial/:id",
        element: <TutorialDetails />,
      },
    ],
  },

  // {
  //   name: "Tutorial Details",
  //   path: "/tutorial/:id",
  //   element: <TutorialDetails />,
  // },
];

export const SidebarRoutes = [
  {
    name: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        name: "Home",
        path: "/home",
        element: <Home />,
        index: true,
        activeIcon: <DashboardIcon />,
      },
      {
        name: "Course",
        path: "/tutorial",
        element: <Tutoral />,
        activeIcon: <SchoolIcon />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  ...SidebarRoutes,
  ...NoSideBarRoute,
]);
