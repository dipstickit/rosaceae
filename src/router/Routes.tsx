import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Thumnail from "../pages/Thumnail";
import Signup from "../pages/Signup";
import HomePage from "../pages/HomePage";
import MakeupServicePage from "../pages/MakeupServicePage";
import ForgotPasswordPage from "../pages/Forgotpassword";
import ServicePage from "../pages/ServiceP";
import SpaPage from "../pages/Spa";
import SpaDetailPage from "../pages/SpaDetail";
import SpafeedbackPage from "../pages/Spafeedback";
import BookingServiceDetailPage from "../pages/BookingServiceDetail";
import CartPage from "../pages/Cart";
import EmailVerifyPage from "../pages/Verify";
import ProfilePage from "../pages/ProfilePage";
import AddressPage from "../pages/Address";
import PaymentPage from "../pages/Payment";
import AboutUsPage from "../pages/AboutUs";
import ContactPage from "../pages/Contact";
import SettingPageOnePage from "../pages/SettingPageOne";
import SettingPageTwoPage from "../pages/SettingPageTwo";
import SettingPageThreePage from "../pages/SettingPageThree";
import NotificationsupdatepasswordPage from "../pages/Notificationsupdatepassword";
import DashboardDesignPage from "../pages/DashboardDesign";
import ReportrevenuePage from "../pages/Reportrevenue";
import LoginPage from "../pages/Login";
import ItemDetail from "../pages/ItemDetail";
import BookingSalon from "../pages/BookingSalon";
import OrderList from "../pages/OrderList";
import ViewBooking from "../pages/ViewBooking";

const RosaceaeRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "thumnail", element: <Thumnail /> },
    { path: "signup", element: <Signup /> },
    { path: "login", element: <LoginPage /> },
    { path: "home", element: <HomePage /> },
    { path: "item", element: <MakeupServicePage /> },
    { path: "forgotpassword", element: <ForgotPasswordPage /> },
    { path: "service", element: <ServicePage /> },
    { path: "spa", element: <SpaPage /> },
    { path: "spadetail/:id", element: <SpaDetailPage /> },
    { path: "item/:id", element: <ItemDetail /> },
    { path: "spafeedback", element: <SpafeedbackPage /> },
    { path: "booking", element: <BookingServiceDetailPage /> },
    // { path: "cart", element: <CartPage /> },
    { path: "verify", element: <EmailVerifyPage /> },
    { path: "profilepage", element: <ProfilePage /> },
    { path: "address", element: <AddressPage /> },
    { path: "checkout", element: <PaymentPage /> },
    { path: "aboutus", element: <AboutUsPage /> },
    { path: "contact", element: <ContactPage /> },
    // { path: "noti", element: <NotificationsupdatepasswordPage /> },
    { path: "settingpageOne", element: <SettingPageOnePage /> },
    { path: "settingpage2", element: <SettingPageTwoPage /> },
    { path: "settingpage3", element: <SettingPageThreePage /> },
    { path: "dashboard", element: <DashboardDesignPage /> },
    { path: "reportave", element: <ReportrevenuePage /> },
    { path: "bookingsalon", element: <BookingSalon /> },
    { path: "order", element: <OrderList /> },
    { path: "viewbooking", element: <ViewBooking /> },
  ]);
  return element;
};

export default RosaceaeRoutes;
