import React from "react";
import "./Works.css";
import { Carousel } from "3d-react-carousal";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

const Works = () => {
  let slides = [
    <img
      style={{ height: "400px", objectFit: "contain" }}
      className="d-block w-100"
      src={carousel1}
      alt="First slide"
    />,
    <img
      style={{ height: "400px", objectFit: "contain" }}
      className="d-block w-100"
      src={carousel2}
      alt="Second slide"
    />,
    <img
      style={{ height: "400px", objectFit: "contain" }}
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
    />,
    <img
      style={{ height: "400px", objectFit: "contain" }}
      className="d-block w-100"
      src={carousel4}
      alt="Fourth slide"
    />,
    <img
      style={{ height: "400px", objectFit: "contain" }}
      className="d-block w-100"
      src={carousel5}
      alt="Fifth slide"
    />,
  ];
  return (
    <section className="work my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h2 style={{ fontFamily: "Poppins", fontWeight: "600" }}>
            Here are some of{" "}
            <span style={{ color: "#7AB259" }}> our works</span>
          </h2>
        </div>
        <div className="col-md-9 mx-auto">
          <div class="container-fluid my-4">
            <Carousel
              slides={slides}
              autoplay={true}
              interval={1000}
            ></Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
