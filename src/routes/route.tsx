import MainLayout from "../layout/MainLayout";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Tutoral from "../pages/tutorial/Tutoral";
import { createBrowserRouter } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import TutorialDetails from "../pages/tutorial/TutorialDetails";
import Challenge from "../pages/challenge/Challenge";
import Ranking from "../pages/ranking/Ranking";
import Forum from "../pages/forum/Forum";
import PeopleIcon from "@mui/icons-material/People";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Course from "../pages/course/Course";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
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
        name: "Course Details",
        path: "/course/:id",
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
        path: "/course",
        element: <Tutoral />,
        activeIcon: <AutoStoriesIcon />,
      },
      {
        name: "Tutorial",
        path: "/tutorial",
        element: <Course />,
        activeIcon: <SchoolIcon />,
      },

      {
        name: "Challenge",
        path: "/challenge",
        element: <Challenge />,
        activeIcon: <SportsKabaddiIcon />,
      },
      {
        name: "Ranking",
        path: "/ranking",
        element: <Ranking />,
        activeIcon: <EmojiEventsIcon />,
      },
      {
        name: "Forum",
        path: "/forum",
        element: <Forum />,
        activeIcon: <PeopleIcon />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  ...SidebarRoutes,
  ...NoSideBarRoute,
]);
