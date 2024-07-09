import React, { useEffect, useState } from "react";
import "./Slideshow.css";
import Slide_one from "./Slide_show/Slide_one.tsx";
import Slide_two from "./Slide_show/Slide_two.tsx";
import Slide_three from "./Slide_show/Slide_three.tsx";
import Slide_four from "./Slide_show/Slide_four.tsx";

const Product = () => {
  const slides = [
    <Slide_one />,
    <Slide_two />,
    <Slide_three />,
    <Slide_four />,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col justify-center w-full xl:px-72 md:px-10 xl:gap-[24px] px-10 md:gap-[20px] mt-10">
        <p className="text-white text-[32px] md:text-[52px] xl:text-[48px] font-Sora font-bold w-full text-left">
          Featured <span className="text-[#F9C80E]"> Products </span>
        </p>

        {/* Desktop */}
        <div className="hidden md:flex flex-row gap-[32px] w-full max-w-[100vw] overflow-x-scroll no-scrollbar ">
          <div className="transform transition duration-300 ">
            <Slide_one />
          </div>
          <div>
            <Slide_two />
          </div>
          <div>
            <Slide_three />
          </div>
          <div>
            <Slide_four />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden mt-20 slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`mySlides ${index === currentSlide ? "fade" : ""}`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              {slide}
            </div>
          ))}

          <a className="prev" onClick={prevSlide}>
            &#10094;
          </a>
          <a className="next" onClick={nextSlide}>
            &#10095;
          </a>

          <div className="dots flex justify-center mt-10">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
