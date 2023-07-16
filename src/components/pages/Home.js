import React, { Fragment } from "react";
import "./Home.css";
import Hero from "../Hero";
import ResultsBanner from "../banners/ResultsBanner";
import NutritionBanner from "../banners/NutritionBanner";
import TransformLife from "../text-areas/TransformLife";
import Inforamtion from "../text-areas/Inforamtion";
import TrainerCards from "../banners/TrainerCards";
import Footer from "../Footer";
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="home-banner__container">
        <ResultsBanner />
        <NutritionBanner />
      </div>
        <TransformLife />
        <Inforamtion />
        <TrainerCards />
        <Footer />
    </Fragment>
  );
};

export default Home;
