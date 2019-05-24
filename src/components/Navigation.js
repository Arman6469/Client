import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink activeClassName="is-active" to="/shop">
        Shop
      </NavLink>
      <NavLink exact activeClassName="is-active" to="/">
      CARRÉ ROUGE
      </NavLink>
      <NavLink activeClassName="is-active" to="/about">
        About
      </NavLink>
    </nav>
  );
}
