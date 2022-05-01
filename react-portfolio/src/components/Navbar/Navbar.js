import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="home" to="/">
        Introductie
      </Link>
      <NavLink className="activities" to="/activiteiten">
        Activiteiten
      </NavLink>
      <Link className="selection" to="/selectie">
        Selectie
      </Link>
      <Link className="reflection" to="/reflectie">
        Reflectie
      </Link>
    </div>
  );
};

export default Navbar;
