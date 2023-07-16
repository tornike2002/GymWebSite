import React, { Fragment } from "react";
import "./Information.css";
const Inforamtion = () => {
  return (
    <Fragment>
      <div className="information-main-background">
        <div className="info-wraper">
          <div className="info-left_side">
            <h1>WEIGHT LOSS GETTING STARTED</h1>
            <p>
              As you know, physical exercises strengthen the body. Regular
              exercise allow you to gain muscle mass.
            </p>
            <h2>GOOD LUCK</h2>

            <h1>PROGRAM FOR BEGINNERS</h1>
            <p>
              The program is oriented on those who make their first steps to
              meet sport and healthy lifestyle.
            </p>
            <h2>NEVER BACK DOWN</h2>
          </div>

          <div className="info-right_side">
            <h1>NUTRITION & SUPPLEMENTS</h1>
            <p>
              In our store you will find everything, that needs the real
              athlete. From sport nutrition to special equipment.
            </p>
            <h2>EAT HEALTHY</h2>

            <h1>USEFUL TIPS & ADVICE</h1>
            <p>
              will always help you with useful advice. We will select for you a
              special program of training and nutrition.
            </p>
            <h2>PRACTICE MORE</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inforamtion;
