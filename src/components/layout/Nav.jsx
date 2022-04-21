import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active" : "none")}
        end
      >
        Users
      </NavLink>
      <NavLink
        to="/teachers"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Teachers
      </NavLink>
      <NavLink
        to="/comp"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Comp
      </NavLink>
    </nav>
  );
};
