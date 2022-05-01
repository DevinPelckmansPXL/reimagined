import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
