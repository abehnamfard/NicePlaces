import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL PLACES
        </NavLink>
      </li>
      <li>
        <NavLink to="/user1">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">NEW PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">ATHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
