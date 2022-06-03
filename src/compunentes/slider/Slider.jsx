import React, { useState, useEffect } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import dataSliderExtra from "./data.SliderExtra";

const Slider = (slideItem) => {
  const [slideIndex, setSlideIndex] = useState(1);
  // console.log(55, slideItem.Categories.length);
  // for (let index = 0; index < slideItem.Categories.length; index++) {
  //   console.log(slideItem.Categories[index].thumpNail);
  // }

  //nextSlide
  function nextSlide() {
    if (slideIndex !== slideItem.Categories.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideItem.Categories.length) {
      setSlideIndex(1);
    }
  }
  setTimeout(nextSlide, 3000);

  //prevSlide
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (setSlideIndex !== 1) {
      setSlideIndex(slideItem.Categories.length);
    }
  };
  //moveDot
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="full-advertisement">
      <div className="advertisement-slider">
        <section className="container-slider">
          {slideItem.Categories.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={
                    "http://localhost:3150" +
                    process.env.PUBLIC_URL +
                    obj.thumpNail
                  }
                />
              </div>
            );
          })}

          <BtnSlider
            className="prevSlide"
            moveSlide={prevSlide}
            direction={"perv"}
          />
          <BtnSlider
            className="nextSlide"
            moveSlide={nextSlide}
            direction={"next"}
          />
          <div className="container-dots">
            {Array.from({ length: slideItem.Categories.length }).map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              )
            )}
          </div>
        </section>
        <div className="container-slider-extra">
          {dataSliderExtra.map((objExtra, index) => {
            return (
              <div className="full-slider-extra" key={index + 1}>
                <img
                  className="Slider-Extra-img"
                  src={
                    process.env.PUBLIC_URL + `/ImgsExtra/img${index + 1}.jpg`
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
