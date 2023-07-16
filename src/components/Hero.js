import React, { Fragment } from "react";
import "./Hero.css";
import NavBar from "./NavBar";
const Hero = () => {
  return (
    <Fragment>
      <div className="hero-background">
        <div className="hero-titles animate__animated animate__fadeInLeft animate__delay-800ms">
          <h1>Personal Trainer</h1>
          <h4>Michele Cox</h4>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
