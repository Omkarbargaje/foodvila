import Food_vila_logo from "./images/food_villa_logo.jpg";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [signin, setSign] = useState("Sign in");

  return (
    <div className="header">
      <div className="appLogo">
        <img src={Food_vila_logo} alt="food_villa_logo" />
      </div>
      <div className="navBar">
        <ul className="navItems">
          <li>About us</li>
          <li>Offers</li>
          <li>Help</li>
          <li
            onClick={() => {
              signin === "Sign in" ? setSign("Sign out") : setSign("Sign in");
            }}
            style={{cursor: "pointer"}}
          >
            {signin}
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
