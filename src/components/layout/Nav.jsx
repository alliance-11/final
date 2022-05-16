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
        to="/login"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Login
      </NavLink>
      <NavLink
        to="/teachers"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Teachers
      </NavLink>
      <NavLink
        to="/students"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Students
      </NavLink>
      <NavLink
        to="/todos"
        className={(navData) => (navData.isActive ? "active" : "none")}
      >
        Todos
      </NavLink>
    </nav>
  )
};
