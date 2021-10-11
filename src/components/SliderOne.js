import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./sliderOne.css";

import ImageOne from "../images/img1.jpeg";
import ImageTwo from "../images/img2.jpeg";
import ImageThree from "../images/img3.jpeg";

function SliderOne() {
  return (
    <div style={{ minHeight: "50vh" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={5000}
      >
        <div>
          <img src={ImageOne} />

          <div className="lb_slider_content">
            <p>skjfsjksdkjdskjdsj</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          </div>
        </div>
        <div>
          <img src={ImageTwo} />

          <div className="lb_slider_content">
            <p>skjfsjksdkjdskjdsj</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          </div>
        </div>
        <div>
          <img src={ImageThree} />

          <div className="lb_slider_content">
            <p>skjfsjksdkjdskjdsj</p>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SliderOne;
