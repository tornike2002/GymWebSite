import React, { Fragment } from "react";
import "./Gallery.css";
import Hero from "../Hero";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
import gallery7 from "../../assets/gallery7.jpg";
import gallery8 from "../../assets/gallery8.jpg";
import gallery9 from "../../assets/gallery9.jpg";
import gallery10 from "../../assets/gallery10.jpg";
import Footer from "../Footer";

const Gallery = () => {
  return (
    <Fragment>
      <Hero />
      <div className="gallery-img-container">
        <h1>OUR STUDIO GALLERY</h1>
        <div className="gallery-container_first">
          <img src={gallery1} alt="gallery1" />
          <img src={gallery2} alt="gallery2" />
          <img src={gallery3} alt="gallery3" />
        </div>
        <div className="gallery-container_second">
          <img src={gallery4} alt="gallery4" />
          <img src={gallery5} alt="gallery5" />
        </div>
        <div className="gallery-container_third">
          <img src={gallery6} alt="gallery6" />
          <img src={gallery7} alt="gallery6" />
        </div>
        <div className="gallery-container_fourth">
          <img src={gallery8} alt="gallery8" />
          <img src={gallery10} alt="gallery8" />
          <img src={gallery9} alt="gallery8" />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Gallery;
