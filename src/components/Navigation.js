import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink  className="header" activeClassName="is-active" to="/shop">
        Shop
      </NavLink>

      <NavLink className="anun" exact activeClassName="is-active" to="/">
        CARRÉ ROUGE
      </NavLink>

      <NavLink className="header" activeClassName="is-active" to="/about">
        About
      </NavLink>
    </nav>
  );
}
