import { useState, useEffect } from "react";

import styles from "./allComponents.module.scss";

const HeroSlider = function () {
  // const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(0);

  const imagesCompiled = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
    "slide5.jpg",
  ];

  const nextImageDelay = 3000;

  // setInterval(nextSlide, nextImageDelay);

  function nextSlide() {
    if (slide > imagesCompiled.length) {
      +setSlide(0);
    } else {
      +setSlide(+slide + 1);
    }

    console.log(slide);
  }

  return (
    <div className={styles.slideContainer}>
      {imagesCompiled.map((img, index) => (
        <img
          src={img}
          key={index}
          className={styles.welcome__slide}
          style={index === slide ? { opacity: 1 } : { opacity: 0 }}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
