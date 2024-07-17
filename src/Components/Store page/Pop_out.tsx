import React, { useState } from "react";


const Pop_out = () => {
  const [slideIndex, setSlideIndex] = useState(0); 

  const nextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="">
      <img
        className={slideIndex === 0 ? "mySlides" : "mySlides hidden"}
        src="/image/pic_oneeee.svg"
        alt="Slide 1"
      />
      <img
        className={slideIndex === 1 ? "mySlides" : "mySlides hidden"}
        src="/image/pic_oneeee.svg"
        alt="Slide 2"
      />
      <img
        className={slideIndex === 2 ? "mySlides" : "mySlides hidden"}
        src="/image/pic_oneeee.svg"
        alt="Slide 3"
      />
      <img
        className={slideIndex === 3 ? "mySlides" : "mySlides hidden"}
        src="/image/pic_oneeee.svg"
        alt="Slide 4"
      />

      <button onClick={prevSlide} className="group p-2">
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
      </button>
      <button onClick={nextSlide} className="group p-2">
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
      </button>
    </div>
  );
};

export default Pop_out;
