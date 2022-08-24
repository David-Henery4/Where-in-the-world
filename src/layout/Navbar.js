import React from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
      <h1 className="navbar__logo">Where in the World?</h1>
      <div className="navbar-mode">
        <BsMoon className="navbar-mode__icon" />
        <p className="navbar-mode__status">Dark Mode</p>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
