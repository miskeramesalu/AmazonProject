import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from '../Carousel/carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  //The main point that I was learned 
  //* how to create a simple image carousel in React,how to  utilize third-party libraries, how to manage dynamic content with map, and how to rendering lists.
  return (
    <div>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
        {img.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </Carousel>
      <div className={classes.hero__img} />
    </div>
  );
}

export default CarouselEffect;
 