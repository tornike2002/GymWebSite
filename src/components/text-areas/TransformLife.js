import React, { Fragment } from "react";
import "./TransformLife.css";
const TransformLife = () => {
  return (
    <Fragment>
      <div className="transformlife-container">
        <h1>BUILD YOUR BODY</h1>
        <hr />
        <h1>TRANSFORM YOUR LIFE</h1>
        <div className="transformlife-paragraph-container">
          <p>
            Fitness is kind of sport, which allows you to raise the level of
            health, body shape, weight. The achieved result, thanks to the
            compliance of all methods, is fixed for a long time. Fitness itself
            includes physical exercises in conjunction with specially balanced
            diet. Plans of your workouts and meals are chosen individually.
          </p>
          <p>
            It depends on the state of health, age, body structure, and various
            contraindications. We strive not only keep to fitness at a decent
            level, but also constantly develop. Every day, the best coaches go
            to сlub, in order to help you achieve goals in sport. I work for
            your health and beauty.
          </p>
        </div>
        <i
          className="fa-regular fa-xmark-large fa-beat"
        >X</i>
        <h2>CALL ME NOW:</h2>
        <h2>(800) <span>123 1234</span></h2>
      </div>
    </Fragment>
  );
};

export default TransformLife;
