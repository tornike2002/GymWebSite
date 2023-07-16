import React, { Fragment } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import "animate.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="nav-bar">
        <div className="navbar-container ">
          <ul className="navbar-items animate__animated animate__fadeInLeft animate__delay-0.5s">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/Programs">PROGRAMS</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">GALLERY</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACTS</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
