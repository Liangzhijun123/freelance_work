import React, { useState, useEffect } from "react";
import Slide_one from "./Slide_show/Slide_one.tsx";
import Slide_two from "./Slide_show/Slide_two.tsx";
import Slide_three from "./Slide_show/Slide_three.tsx";
import "./Slideshow.css";

const Pricing = () => {
  const slides = [<Slide_one />, <Slide_two />, <Slide_three />];
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
    <>
      <div className="mt-[150px]">
        <div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <p className="text-white text-[16px] border flex justify-center border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px]  w-[76px] mx-auto">
              Pricing
            </p>
            <p className="text-white md:text-[48px] text-[24px] font-Sora font-semibold md:w-full text-center w-[250px]">
              Campaign{" "}
              <span className="text-[#F9C80E]">Management By Tier</span>
            </p>
            <p className="text-[#CAC6DD] md:text-[18px] text-[16px] font-Inter md:w-[573px] w-[335px] text-center">
              Access all three services in one convenient bundle, available only
              through our platform. Unmatched convenience guaranteed.
            </p>
            <div className=" flex flex-row justify-evenly items-center md:w-[414px] w-[335px] h-[45px] md:h-[56px] bg-gradient-to-b from-[#0b0415] to-[#22223267] bg-opacity-[16%] rounded-[16px] border border-[#2C2D47]">
              <div className="hover:bg-[#F9C80E] md:w-[140px] w-[95px] h-[37px] md:h-[48px] md:p-3 p-2 rounded-[12px]">
                <a className="text-white flex justify-center hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">
                  Monthly
                </a>
              </div>
              <div className="hover:bg-[#F9C80E] md:w-[140px] w-[120px] h-[37px] md:h-[48px] md:p-3 p-2 rounded-[12px]">
                <a className="text-white flex justify-center text-nowrap hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">
                  Semi-annually
                </a>
              </div>
              <div className="hover:bg-[#F9C80E] md:w-[140px] w-[95px] h-[37px] md:h-[48px] md:p-3 p-2 rounded-[12px]">
                <a className="text-white flex justify-center hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">
                  Annually
                </a>
              </div>
            </div> 
            {/* Desktop and Tablet view */}
            <div className="hidden md:flex flex-row justify-center gap-[24px] mt-20">
              <div className="transform transition duration-300 hover:scale-110">
                <Slide_one />
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <Slide_two />
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <Slide_three />
              </div>
            </div>

            {/* Mobile view */}
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
          {/* unknown realms */}
          <div className="flex justify-center items-center mt-[250px] ">
            <div className="xl:w-[1320px] xl:h-full md:min-w-[850px] w-[335px] h-[889px] md:h-[400px] rounded-[20px] bg-gradient-to-r from-[rgba(18,18,18,0.22)] to-[rgba(83,84,108,0.22)]">
              <div className="flex md:flex-row flex-col gap-[57px] md:text-left text-center justify-center items-center xl:p-8 md:p-12">
                <div className=" flex flex-col md:gap-[26px] gap-[16px] md:w-[750px] w-[295px] p-5"> 
                  <p className="text-white font-Sora font-semibold xl:text-[48px] md:text-[28px] text-[24px]"  >
                    Embark on your Journey Into The{" "}
                    <span className="text-[#F9C80E]">Unknown Realms Now!</span>
                  </p>
                  <p className="text-[#CAC6DD] font-Inter md:text-[18px] text-[16px]">
                    Lantern app is an indispensable tool at the table. Dungeon
                    Masters can easily use the app as a second DM screen. All
                    your character information and game rules are right there .
                  </p>

                  {/* google play */}
                  <div className="flex flex-row gap-[30px] w-full">
                    <a href="">
                      <img src="/image/google.svg"></img>
                    </a>
                    <a href="">
                      <img src="/image/apple.svg"></img>
                    </a>
                  </div>
                </div>
                <div>
                  <img src="/image/phone_image.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
