import React from "react";
import "./Programms.css";
import ProgramLogo from "../../assets/programm-picture.jpg";
import Hero from "../Hero";
import Footer from "../Footer";

const Programms = () => {
  return (
    <>
      <Hero />

      <div className="program-container">
        <h1>HOW TO STAY IN SHAPE</h1>
        <div className="program-image_container">
          <img src={ProgramLogo} alt="programLogo" />
          <div className="program-text_container">
            <p>
              MANY PEOPLE WANT TO BE IN GOOD SHAPE AND IMPROVE THEIR HEALTH, BUT
              CAN NOT COPE WITH MAINTAINING THE CORRECT MODE. THESE SIMPLE STEPS
              WILL HELP YOU.
            </p>
            <p>
              It is not a secret that the vast majority of fans of fitness does
              not dream of championship laurels. They are far more interested in
              attractive appearance and good health. Unlike those same
              bodybuilders, fitnessists, tend to be in shape all year round. Is
              it possible? It is known that at least 50% of success in such a
              complex case like fitness, has a proper balanced diet. That's why
              this article will be devoted to this aspect.
            </p>
            <p>
              The main rule that you need to learn immediately: be consistent in
              your efforts and stick to the golden mean. If you want to look
              good, then diet aimed at one period of time on a weight gain and
              the other on getting rid of it, is not for you. You need to get
              enough stable number of calories from dietary products.
            </p>
          </div>
        </div>

        <h1>WORKOUT OF THE DAY</h1>
        <div className="program-day_container">
          <div className="program-day_text">
            <p>
              A SET OF EXERCISES FOR ONE DAY FROM MICHELLE COX. TRAINING IS
              PERFORMED IN A CONTINUOUS PACE. THIS EXERCISES WILL REPLACE THE
              FULL WORKOUT AND WILL GIVE VIVACITY FOR THE WHOLE DAY.
            </p>
          </div>
          <div className="program-day_list">
            <ul>
              <li>
                <h2>PUSH UP BURPEES - 3 SETS OF 20 REPS</h2>
                <p>
                  Coaching Keys: perform the movement fast, but don't sacrifice
                  technique for speed. Extend legs completely when in the
                  push-up position. Focus on landing with hips back and knees
                  soft.
                </p>
              </li>
              <li>
                <h2>AIR SQUATS - 5 SETS OF 30 SECONDS</h2>
                <p>
                  An air squat, also called a body weight squat, is an effective
                  exercise for both the beginner and the advanced athlete. It
                  uses just your body weight to tone and strengthen the muscles
                  of your buttocks - gluteus minimus and maximus--and your thigh
                  muscles, the hamstrings and quadriceps.
                </p>
              </li>
              <li>
                <h2>BUTTERFLY SIT-UPS - 50 REPS</h2>
                <p>
                  The butterfly position means bending your legs and tilting
                  them outwards. When doing sit-ups in the butterfly position,
                  the range of motion is much greater than when they are done
                  with raised legs, so that Athletes can touch the ground in
                  front of their feet.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <h1>MY CLASSES</h1>
        <div className="program-classes_container">
          <div className="program-first_week">
            <div className="program-week_container">
              <p>CARDIO</p>
              <p>PILATES</p>
              <p>CARDIO</p>
              <p>ZUMBA</p>
              <p>PILATES</p>
            </div>
            <div className="program-week_clock">
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
            </div>
            <div className="prgoram-week_times">
              <p>12:00 - 12:45</p>
              <p>16:00 - 16:45</p>
              <p>18:00 - 19:00</p>
              <p>10:00 - 11:00</p>
              <p>13:00 - 13:45</p>
            </div>
          </div>
          <div className="program-second_week">
            <div className="program-week_container">
              <p>CARDIO</p>
              <p>PILATES</p>
              <p>CARDIO</p>
              <p>ZUMBA</p>
              <p>PILATES</p>
            </div>
            <div className="program-week_clock">
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
              <i className="fa-regular fa-clock fa-flip-horizontal"></i>
            </div>
            <div className="prgoram-week_times">
              <p>12:00 - 12:45</p>
              <p>16:00 - 16:45</p>
              <p>18:00 - 19:00</p>
              <p>10:00 - 11:00</p>
              <p>13:00 - 13:45</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programms;
