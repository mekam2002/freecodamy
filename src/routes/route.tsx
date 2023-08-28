import MainLayout from "../layout/MainLayout";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Tutoral from "../pages/tutorial/Tutoral";
import { RouteObject, createBrowserRouter } from "react-router-dom";
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
import SignInScreen from "../pages/auth/SignInScreen";
import SignUpScreen from "../pages/auth/SignUpScreen";
import Profile from "../pages/profile/Profile";
interface LocalRouteProps {
  name: string;
  path: string;
  element: JSX.Element;
  children?: any;
  activeIcon?: JSX.Element;
  // index?: boolean;
}

type CombinedRoute = RouteObject & LocalRouteProps;

const NoSideBarRoute: CombinedRoute[] = [
  {
    name: "Auth",
    path: "/auth",
    element: <Auth />,
    children: [
      {
        name: "Sign In",
        path: "/auth/signin",
        element: <SignInScreen />,
      },
      {
        name: "Sign Up",
        path: "/auth/signup",
        element: <SignUpScreen />,
      },
    ],
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
      {
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  // {
  //   name: "Sign In",
  //   path: "/signin",
  //   element: <SignInScreen />,
  // },
];

export const SidebarRoutes: CombinedRoute[] = [
  {
    name: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        name: "Home",
        path: "/home",
        element: <Home />,
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
