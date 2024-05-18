import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Thumnail from "../pages/Thumnail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import MakeupServicePage from "../pages/MakeupServicePage";
import ForgotPasswordPage from "../pages/Forgotpassword";
import Frame2593Page from "../pages/Frame2593";
import SpaPage from "../pages/Spa";
import SpaDetailPage from "../pages/SpaDetail";
import SpafeedbackPage from "../pages/Spafeedback";
import BookingServiceDetailPage from "../pages/BookingServiceDetail";
import CartPage from "../pages/Cart";

const RosaceaeRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "thumnail", element: <Thumnail /> },
    { path: "signup", element: <Signup /> },
    { path: "login", element: <Login /> },
    { path: "home", element: <HomePage /> },
    { path: "makeupservicepage", element: <MakeupServicePage /> },
    { path: "forgotpassword", element: <ForgotPasswordPage /> },
    { path: "frame2593", element: <Frame2593Page /> },
    { path: "spa", element: <SpaPage /> },
    { path: "spadetail", element: <SpaDetailPage /> },
    { path: "spafeedback", element: <SpafeedbackPage /> },
    { path: "booking", element: <BookingServiceDetailPage /> },
    { path: "cart", element: <CartPage /> },


  ]);
  return element;
};

export default RosaceaeRoutes;
