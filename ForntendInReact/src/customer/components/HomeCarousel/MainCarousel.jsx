import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import s1 from "../../../img/s1.webp";
import s2 from "../../../img/s2.webp";
import s3 from "../../../img/s3.webp";
import s4 from "../../../img/s4.webp";

const slides = [
  {
    image: s1,
  },
  {
    image: s2,
  },
  {
    image: s3,
  },
  {
    image: s4,
  },
];

const MainCarousel = () => {
  const items = slides.map((slide) => (
    <img
      className="cursor-pointer -z-10"
      role="presentation"
      src={slide.image}
      alt="No data"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
