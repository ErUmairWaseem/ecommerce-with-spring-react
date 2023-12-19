import React, { useState } from "react";
import "./HomeSectionCarousel.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function HomeSectionCarousel1({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex - 2);
  const slideNext = () => setActiveIndex(activeIndex + 2);

  const getBox = () => {
    return document.querySelector(".carousel1-container");
  };
  const getBox2 = () => {
    return document.querySelector(".carousel1-container-list");
  };

  const prev = () => {
    slidePrev();
    const box = getBox();
    const box2 = getBox2();
    const width2 = box2.clientWidth;
    box.scrollLeft = box.scrollLeft - width2;
  };

  const next = () => {
    slideNext();
    const box = getBox();
    const box2 = getBox2();
    const width2 = box2.clientWidth;
    box.scrollLeft = box.scrollLeft + width2 * 2;
  };

  return (
    <div className="carousel1 bg-gray-50">
      <div className="carousel1-content relative carousel-content flex flex-col px-8 border border-blue-200 rounded-md ">
        <div className="w-full flex">
          <h2 className="text-xl font-semibold text-blue-600 cursor-pointer py-2 mx-2">
            Mens Kurta
          </h2>
        </div>
        <div className="carousel1-container pb-4 gap-2 flex scroll-smooth overflow-hidden">
          {data.map((product) => (
            <div className="carousel1-container-list p-0.5 hover:p-0 border border-gray-300 hover:border-blue-400 mx-1 flex flex-col items-center rounded-md shadow-md hover:opacity-80 cursor-pointer">
              <img
                src={product.imageUrl}
                alt=""
                className="w-full h-52 mb-2 rounded-t-md"
              />
              <span className="text-xs font-semibold text-gray-600">
                {product.brand}
              </span>
              <span className="text-sm mb-2">{product.title}</span>
            </div>
          ))}
        </div>
        {activeIndex !== 0 && (
          <button
            onClick={prev}
            className="absolute h-full left-0 -translate-x-4 "
          >
            <FaChevronLeft className="bg-white shadow-md border text-gray-600 hover:bg-blue-600 hover:text-white h-16 px-2 w-8 rounded-md" />
          </button>
        )}
        {activeIndex !== data.length && (
          <button
            onClick={next}
            className="absolute h-full right-0 translate-x-4 "
          >
            <FaChevronRight className="bg-white shadow-md border text-gray-600 hover:bg-blue-600 hover:text-white  h-16 px-2 w-8 rounded-md" />
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel1;
