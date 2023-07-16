import React, { Fragment } from "react";
import Hero from "../Hero";
import "./About.css";
import AboutInstructor from "../../assets/about-girl.jpg";
import AboutPhotoOne from "../../assets/about-flex-1.jpg";
import AboutPhotoTwo from "../../assets/about-flex-2.jpg";
import AboutPhotoThree from "../../assets/about-flex-3.jpg";
import AboutPhotoFour from "../../assets/about-flex-4.jpg";
import AboutPhotoFive from "../../assets/about-flex-5.jpg";
import AboutPhotoSix from "../../assets/about-flex-6.jpg";
import Footer from "../Footer";

const About = () => {
  return (
    <Fragment>
      <div>
        <Hero />
      </div>

      <div className="about-container">
        <div className="about-inst-container">
          <div className="about-image_wraper">
            <h1>About ME</h1>
            <img src={AboutInstructor} alt="AboutInstructor" />
          </div>
          <div className="about-instructor_wraper">
            <h1>I AM AN EXPERIENCED AND QUALIFIED SPORT-INSTRUCTOR.</h1>
            <p>And I offer help in all kinds of fitness services:</p>
            <p>-Preparation of individual nutrition plan.</p>
            <p>-Training plan for mass indicators.</p>
            <p>-Personal training based on different fitness clubs.</p>
            <p>-Personal trainings outdoors</p>
            <p>
              -Consultations on application of sports nutrition,
              pharmacology(drafting courses, guidelines for courses, cleaning)
            </p>
            <p>-Preparation for competitions.</p>
          </div>
        </div>

        <div className="my-mission_wraper">
          <h1>MY MISSION</h1>
          <div>
            <h2>MY GOAL IS TO CHANGE YOUR WAY OF LIFE</h2>
            <p>
              To make fitness a part of your life, so that it was better and
              brighter! My mission is also to advise you and find for you the
              quickest and most effective way to achieve the goals. I believe
              that everyone can change their lives. Become better and stronger.
            </p>
          </div>
          <div>
            <h2>MY GOAL IS TO IMPROVE THE STATE OF YOUR HEALTH</h2>
            <p>
              I will help you to cope with psychological problems, to increase
              self-esteem, to shake off fear, insomnia and depression. Physical
              activity reduces stress, improves mood, because stimulates
              secretion of the joys hormone of serotonin and delays its
              collapse.
            </p>
          </div>
          <div>
            <h2>MY GOAL IS TO MAKE YOUR BODY STRONG AND POWERFUL</h2>
            <p>
              As you know, exercise strengthens the body and allow you to be in
              good physical shape. Exactly regular exercise allow you to gain
              muscle mass, get rid of the extra pounds and get a slender figure.
            </p>
          </div>
        </div>

        <div className="about-images_container">
          <h1>MY HAPPY CLIENTS</h1>
          <div className="about-images-wraper">
            <img src={AboutPhotoOne} alt="AboutPhotoOne" />
            <img src={AboutPhotoTwo} alt="AboutPhotoTwo" />
            <img src={AboutPhotoThree} alt="AboutPhotoTwo" />
            <img src={AboutPhotoFour} alt="AboutPhotoTwo" />
            <img src={AboutPhotoFive} alt="AboutPhotoTwo" />
            <img src={AboutPhotoSix} alt="AboutPhotoTwo" />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
