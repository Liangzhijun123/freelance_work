import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.css";
import "./Popshow.css";
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
import Slide_17 from "./Slide_show_five/Slide_one.tsx";
import Slide_18 from "./Slide_show_five/Slide_two.tsx";
import Slide_19 from "./Slide_show_five/Slide_three.tsx";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleSlidesCount, setVisibleSlidesCount] = useState(3);

  const [popOutOpen, setPopOutOpen] = useState(false);
  const popOutRef = useRef<HTMLDivElement>(null);

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

  const popoutSlides = [<Slide_17 />, <Slide_18 />, <Slide_19 />];

  const updateVisibleSlidesCount = () => {
    if (window.innerWidth <= 768) {
      setVisibleSlidesCount(1);
    } else {
      setVisibleSlidesCount(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisibleSlidesCount);
    updateVisibleSlidesCount();

    return () => {
      window.removeEventListener("resize", updateVisibleSlidesCount);
    };
  }, []);

  const showPreviousSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev > 0 ? prev - 1 : popoutSlides.length - visibleSlidesCount
    );
  };

  const showNextSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev < popoutSlides.length - visibleSlidesCount ? prev + 1 : 0
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const togglePopOut = () => {
    setPopOutOpen(!popOutOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popOutRef.current &&
        !popOutRef.current.contains(event.target as Node)
      ) {
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
            <div onClick={togglePopOut}>{slide}</div>
          </div>
        ))}
      </div>

      {popOutOpen && (
        <div className="pop-out-overlay xl:w-[1188px] xl:h-[1993px] md:min-w-[988px] md:h-[993px] w-[335px] h-[450px]">
          <div ref={popOutRef} className="pop-out-content">
            <div className="flex flex-col justify-center md:p-6 p-2">
              <div className="flex items-center md:flex-row flex-col gap-[48px]">
                <div className="h-full w-full">
                  <img
                    src="/image/pic_onee.svg"
                    className="md:block hidden h-full w-full object-cover"
                  />
                  <img
                    src="/image/pic_oneee.svg"
                    className="md:hidden block h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center xl:gap-[49px] md:gap-[24px] md:w-[481px] w-[295px]">
                  <div>
                    <p className="text-white font-Sora font-semibold md:text-[40px] text-[24px]">
                      D&D Vecna: Eve of Ruin
                    </p>
                  </div>
                  <div className="md:p-6 p-3 flex flex-col gap-[16px] border border-[#F9C80E] rounded-[20px] md:h-[279px] h-[450px]">
                    <div className="flex flex-col gap-[8px] font-Inter">
                      <p className="text-white md:text-nowrap md:text-full text-wrap md:w-full w-[155px]">
                        Author:{" "}
                        <span className="text-[#F9C80E]">
                          Wizards of the Coast
                        </span>
                      </p>
                      <p className="text-white font-Inter md:text-wrap md:text-full text-wrap md:w-full w-[255px]">
                        Package: A Combination Of Art And Adventure Content.
                        More Detail On Each Item Is Below.
                      </p>
                      <p className="text-white font-Inter font-semibold text-[32px]">
                        $24.99
                        <span className="font-Inter font-normal text-[12px]">
                          USD
                        </span>
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-[22px]">
                      <div className="flex gap-[10px] text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[142px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black items-center justify-center group">
                        <div className="relative">
                          <img
                            src="/image/star.svg"
                            alt="star"
                            className="block group-hover:hidden"
                          />
                          <img
                            src="/image/blackstar.svg"
                            alt="blackstar"
                            className="hidden group-hover:block"
                          />
                        </div>
                        <a href="#Wishlist" className="group-hover:text-black">
                          Wishlist
                        </a>
                      </div>
                      <div className="flex gap-[10px] text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[114px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black items-center justify-center group">
                        <div className="relative">
                          <img
                            src="/image/GIft.svg"
                            alt="star"
                            className="block group-hover:hidden"
                          />
                          <img
                            src="/image/BlackGift.svg"
                            alt="blackstar"
                            className="hidden group-hover:block"
                          />
                        </div>
                        <a href="#Gift" className="group-hover:text-black">
                          Gift
                        </a>
                      </div>
                      <div className="flex gap-[10px] text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[133px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black items-center justify-center group">
                        <a href="#BuyNow" className="group-hover:text-black">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slideshow-container xl:right-[270px] md:right-[170px] top-6">
                <div className="flex items-center w-full">
                  <a className="prev group mr-2" onClick={showPreviousSlide}>
                    <img
                      src="/image/leftarrow.svg"
                      alt="left arrow"
                      className="block group-hover:hidden"
                    />
                    <img
                      src="/image/blackleftarrow.svg"
                      alt="black left arrow"
                      className="hidden group-hover:block"
                    />
                  </a>
                  <div className="slides-wrapper flex overflow-hidden">
                    {popoutSlides.map((slide, index) => (
                      <div
                        key={index}
                        className={`slide-item w-full ${
                          index >= currentSlideIndex &&
                          index < currentSlideIndex + visibleSlidesCount
                            ? "block"
                            : "hidden"
                        } ${index === currentSlideIndex ? "fade" : ""}`}
                      >
                        {slide}
                      </div>
                    ))}
                  </div>
                  <a className="next group ml-2" onClick={showNextSlide}>
                    <img
                      src="/image/rightarrow.svg"
                      alt="right arrow"
                      className="block group-hover:hidden"
                    />
                    <img
                      src="/image/blackrightarrow.svg"
                      alt="black right arrow"
                      className="hidden group-hover:block"
                    />
                  </a>
                </div>
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
          <img
            src="/image/row_pic.svg"
            className="w-full md:w-[600px]"
            alt="Urban"
          />
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
          <img
            src="/image/row_pic2.svg"
            className="w-full md:w-[600px]"
            alt="Sci-Fi"
          />
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
          <img
            src="/image/row_pic3.svg"
            className="w-full md:w-[600px]"
            alt="Fantasy"
          />
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
          <img
            src="/image/row_pic4.svg"
            className="w-full md:w-[600px]"
            alt="All Story"
          />
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
              Anniversary <span className="text-white"> Sale </span>
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
