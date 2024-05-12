import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Thumnail from "../pages/Thumnail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Homepvioinyna from "../pages/Homepvioinyna";
import MakeupServicePage from "../pages/MakeupServicePage";

const RosaceaeRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "thumnail", element: <Thumnail /> },
    { path: "signup", element: <Signup /> },
    { path: "login", element: <Login /> },
    { path: "home", element: <Homepvioinyna /> },
    { path: "makeupservicepage", element: <MakeupServicePage /> },
  ]);
  return element;
};

export default RosaceaeRoutes;
