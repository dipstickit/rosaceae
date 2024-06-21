import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

function App() {
  const isOpen = useSelector((state: RootState) => state.checkout.isOpen);

  return (
    <Router>
      <Routes />
      {isOpen && <Cart />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
        draggable={true}
      />
    </Router>
  );
}

export default App;
