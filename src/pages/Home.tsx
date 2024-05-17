import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By
        <a
          href="https://www.facebook.com/jayd1pi"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          PhuocNguyen
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/thumnail"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Thumnail
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Login
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link to="/signup" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Signup
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/address"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Address
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link to="/home" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/makeupservicepage"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          MakeupServicePage
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/forgotpassword"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          ForgotPassword
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/frame2593"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Frame2593
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/spa"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Spa
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/spadetail"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Spadetail
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/spafeedback"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          SpaFeeback
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/booking"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Booking
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/cart"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Cart
        </Link>
      </li>
      <ul style={{ listStyle: "none", padding: "0" }}></ul>
    </div>
  );
};
export default Home;
