import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/profile">profile</Link>
      <Link to="/tweets">tweets</Link>
    </div>
  );
};
export default NavBar;
