import React, { Fragment } from "react";
import "./TrainerCards.css";
const TrainerCards = () => {
  return (
    <Fragment>
      <div>
        <div className="trainer-text_side">
          <i className="fa-regular fa-xmark-large fa-beat">X</i>
          <h1>TRAINERS</h1>
        </div>

        <div className="trainer-card_container">
          <div className="trainer-card_first">
            <div className="trainer-img1"></div>
            <p>
              " Michelle captivates by her sincerity. She easily helped me to
              overcome my problems with weight. "
            </p>
            <h2>Michelle FORD</h2>
            <h2>(TRAINER)</h2>
          </div>
          {/* second car */}
          <div className="trainer-card_first">
            <div className="trainer-img2"></div>
            <p>
              " This is a cheerful girl, who has not only made a specific
              physical form, but also competently teach all comers. "
            </p>
            <h2>TAMARA COX</h2>
            <h2>(TRAINER)</h2>
          </div>
          {/* third card */}
          <div className="trainer-card_first">
            <div className="trainer-img3"></div>
            <p>
              " RITA NELSON is the best trainer! Attentive and experienced! I
              advise you to train with her. "
            </p>
            <h2>RITA NELSON</h2>
            <h2>(TRAINER)</h2>
          </div>
          {/* fourth card */}
          <div className="trainer-card_first">
            <div className="trainer-img4"></div>
            <p>
              " JAMES competently picked up a programme for training, and
              consulted about diet, raised morale. "
            </p>
            <h2>JAMES SMITH</h2>
            <h2>(TRAINER)</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TrainerCards;
