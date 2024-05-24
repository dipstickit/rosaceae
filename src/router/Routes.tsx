import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Thumnail from "../pages/Thumnail";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import MakeupServicePage from "../pages/MakeupServicePage";
import ForgotPasswordPage from "../pages/Forgotpassword";
import ServicePage from "../pages/Frame2593";
import SpaPage from "../pages/Spa";
import SpaDetailPage from "../pages/SpaDetail";
import SpafeedbackPage from "../pages/Spafeedback";
import BookingServiceDetailPage from "../pages/BookingServiceDetail";
import CartPage from "../pages/Cart";
import ProfilePage from "../pages/ProfilePage";
import AddressPage from "../pages/Address";
import PaymentPage from "../pages/Payment";
import AboutUsPage from "../pages/AboutUs";
import ContactPage from "../pages/Contact";

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
    { path: "frame2593", element: <ServicePage /> },
    { path: "spa", element: <SpaPage /> },
    { path: "spadetail", element: <SpaDetailPage /> },
    { path: "spafeedback", element: <SpafeedbackPage /> },
    { path: "booking", element: <BookingServiceDetailPage /> },
    { path: "cart", element: <CartPage /> },
    { path: "profilepage", element: <ProfilePage /> },
    { path: "address", element: <AddressPage /> },
    { path: "payment", element: <PaymentPage /> },
    { path: "aboutus", element: <AboutUsPage /> },
    { path: "contact", element: <ContactPage /> },

  ]);
  return element;
};

export default RosaceaeRoutes;
