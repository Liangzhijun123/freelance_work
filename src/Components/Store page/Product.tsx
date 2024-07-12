import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.css";
import Slide_one from "./Slide_show/Slide_one.tsx";
import Slide_two from "./Slide_show/Slide_two.tsx";
import Slide_three from "./Slide_show/Slide_three.tsx";
import Slide_four from "./Slide_show/Slide_four.tsx";
import Slide_five from "./Slide_show_two/Slide_one.tsx";
import Slide_six from "./Slide_show_two/Slide_two.tsx";
import Slide_seven from "./Slide_show_two/Slide_three.tsx";
import Slide_eight from "./Slide_show_two/Slide_four.tsx";
import Slide_nine from "./Slide_show_three/Slide_one.tsx";
import Slide_ten from "./Slide_show_three/Slide_two.tsx";
import Slide_eleven from "./Slide_show_three/Slide_three.tsx";
import Slide_twelve from "./Slide_show_three/Slide_four.tsx";
import Slide_13 from "./Slide_show_four/Slide_one.tsx";
import Slide_14 from "./Slide_show_four/Slide_two.tsx";
import Slide_15 from "./Slide_show_four/Slide_three.tsx";
import Slide_16 from "./Slide_show_four/Slide_four.tsx";

const Product = () => {
  const featuredSlides = [
    <Slide_one />,
    <Slide_two />,
    <Slide_three />,
    <Slide_four />,
  ];

  const bestSellersSlides = [
    <Slide_five />,
    <Slide_six />,
    <Slide_seven />,
    <Slide_eight />,
  ];

  const newReleasesSlides = [
    <Slide_nine />,
    <Slide_ten />,
    <Slide_eleven />,
    <Slide_twelve />,
  ];

  const anniversarySaleSlides = [
    <Slide_13 />,
    <Slide_14 />,
    <Slide_15 />,
    <Slide_16 />,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [popOutOpen, setPopOutOpen] = useState(false); // State to track pop-out visibility
  const popOutRef = useRef<HTMLDivElement>(null); // Ref to the pop-out content

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  // Toggle pop-out open/close
  const togglePopOut = () => {
    setPopOutOpen(!popOutOpen);
  };

  // Close pop-out when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popOutRef.current && !popOutRef.current.contains(event.target as Node)) {
        setPopOutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSlides = (slides: JSX.Element[]) => (
    <>
      <div className="hidden md:flex flex-row gap-[32px] w-full max-w-[100vw] overflow-x-scroll no-scrollbar">
        {slides.map((slide, index) => (
          <div key={index} className="transform transition duration-300">
            {/* Clickable slide component */}
            <div onClick={togglePopOut}>{slide}</div>
          </div>
        ))}
      </div>

      {/* Pop-out overlay and content */}
      {popOutOpen && (
        <div className="pop-out-overlay">
          <div ref={popOutRef} className="pop-out-content">
              <div className="flex flex-row gap-[48px] justify-center">
                <div>
                  <img></img>
                </div>

              </div>
          </div>
        </div>
      )}

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
    </>
  );

  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center w-full xl:px-72 md:px-10 xl:gap-[24px] px-10 md:gap-[20px] mt-10">
          <p className="text-white text-nowrap text-[28px] md:text-[52px] xl:text-[32px] font-Sora font-bold w-full text-left">
            Featured <span className="text-[#F9C80E]"> Products </span>
          </p>
          {renderSlides(featuredSlides)}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-center w-full xl:px-72 md:px-10 xl:gap-[24px] px-10 md:gap-[20px] mt-20">
          <div className="flex md:flex-row flex-col items-center">
            <p className="text-white w-[335px] text-[28px] md:text-[52px] xl:text-[32px] font-Inter font-bold md:w-full text-left">
              Dungeons & Dragons{" "}
              <span className="text-[#F9C80E]"> Best Sellers </span>
            </p>
            <div className="flex justify-center flex-none w-[335px] md:w-[100px] h-[40px] border-[0.5px] border-[#F9C80E] hover:bg-[#F9C80E] p-1 rounded-[8px]">
              <a className="font-Inter font-medium text-[18px] hover:text-black text-white">
                View all
              </a>
            </div>
          </div>
          {renderSlides(bestSellersSlides)}
        </div>
      </div>

      <div className="flex md:flex-row flex-col px-10 gap-[24px] mt-[80px] justify-center items-center xl:px-[300px] md:px-[100px] py-[48px]">
        <div className="relative flex justify-center items-center w-full md:w-auto rounded-[8px] border border-transparent hover:border-[#FFC240] group">
          <img src="/image/row_pic.svg" className="w-full md:w-[600px]" alt="Urban" />
          <div className="absolute flex flex-col gap-2 text-center">
            <p className="text-white text-[24px] font-bold font-Sora group-hover:text-[#F9C80E]">
              Urban
            </p>
            <p className="text-white font-Inter text-[14px]">
              Enjoy the Urban story
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full md:w-auto rounded-[8px] border border-transparent hover:border-[#FFC240] group">
          <img src="/image/row_pic2.svg" className="w-full md:w-[600px]" alt="Sci-Fi" />
          <div className="absolute flex flex-col gap-2 text-center">
            <p className="text-white text-[24px] font-bold font-Sora group-hover:text-[#F9C80E]">
              Sci-Fi
            </p>
            <p className="text-white font-Inter text-[14px]">
              Explore the Sci-Fi Story
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full md:w-auto rounded-[8px] border border-transparent hover:border-[#FFC240] group">
          <img src="/image/row_pic3.svg" className="w-full md:w-[600px]" alt="Fantasy" />
          <div className="absolute flex flex-col gap-2 text-center">
            <p className="text-white text-[24px] font-bold font-Sora group-hover:text-[#F9C80E]">
              Fantasy
            </p>
            <p className="text-white font-Inter text-[14px]">
              Read the Fantasy Story
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full md:w-auto rounded-[8px] border border-transparent hover:border-[#FFC240] group">
          <img src="/image/row_pic4.svg" className="w-full md:w-[600px]" alt="All Story" />
          <div className="absolute flex flex-col gap-2 text-center">
            <p className="text-white text-[24px] font-bold font-Sora group-hover:text-[#F9C80E]">
              All Story
            </p>
            <p className="text-white font-Inter text-[14px]">
              Enjoy Our All Story
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-center w-full xl:px-72 md:px-10 xl:gap-[24px] px-10 md:gap-[20px] mt-20">
          <div className="flex md:flex-row flex-col items-center">
            <p className="text-white w-[335px] text-[28px] md:text-[52px] xl:text-[32px] font-Inter font-bold md:w-full text-left">
              Dungeons & Dragons{" "}
              <span className="text-[#F9C80E]"> New Releases </span>
            </p>
            <div className="flex justify-center flex-none w-[335px] md:w-[100px] h-[40px] border-[0.5px] border-[#F9C80E] hover:bg-[#F9C80E] p-1 rounded-[8px]">
              <a className="font-Inter font-medium text-[18px] hover:text-black text-white">
                View all
              </a>
            </div>
          </div>
          {renderSlides(newReleasesSlides)}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-center w-full xl:px-72 md:px-10 xl:gap-[24px] px-10 md:gap-[20px] mt-20">
          <div className="flex md:flex-row flex-col items-center">
            <p className="text-[#F9C80E] w-[335px] text-[28px] md:text-[52px] xl:text-[32px] font-Inter font-bold md:w-full text-left">
            Anniversary{" "}
              <span className="text-white">  Sale </span>
            </p>
            <div className="flex justify-center flex-none w-[335px] md:w-[100px] h-[40px] border-[0.5px] border-[#F9C80E] hover:bg-[#F9C80E] p-1 rounded-[8px]">
              <a className="font-Inter font-medium text-[18px] hover:text-black text-white">
                View all
              </a>
            </div>
          </div>
          {renderSlides(anniversarySaleSlides)}
        </div>
      </div>
      
    </>
  );
};

export default Product;
