import Food_vila_logo from "./images/food_villa_logo.jpg";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [signin, setSign] = useState("Sign in");

  return (
    <div className="header">
      <div className="appLogo">
      <Link to="/"><img src={Food_vila_logo} alt="food_villa_logo" /></Link>
      </div>
      <div className="navBar">
        <ul className="navItems">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us </Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li
            onClick={() => {
              signin === "Sign in" ? setSign("Sign out") : setSign("Sign in");
            }}
            style={{cursor: "pointer"}}
          >
        
            {signin}
          </li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
