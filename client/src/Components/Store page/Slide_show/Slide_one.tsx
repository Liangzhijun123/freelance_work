import React, { useState } from "react";
const Featured = [
    {
      pic: "/image/pic_one.svg",
      text_one: "Pendragon Core Rut...",
      text_two: "Three years ago, Xiao Yan, who had shown...",
      text_three: "$24.99",
      text_four: "Games Adventures",
      text_five: "Long Campaigns",
    },
    
    
    
  ];
  
const Slide_one = () => {
    
  return (
    <>
      <div className="hidden md:flex flex-row justify-center gap-[32px] max-w-[100vw]">
        {Featured.map((item, index) => (
          <div
            key={index}
            className="relative w-[306px] h-[439px] rounded-[10px] border border-transparent hover:border-[#FAD33E]"
            style={{
              backgroundImage:
                "linear-gradient(245deg, #0D002C, rgba(255, 255, 255, 0), rgba(92, 35, 203, 0.2))",
            }}
          >
            <div
              className="absolute inset-0 rounded"
              style={{
                background: "inherit",
                borderBottom: "1px solid transparent",
                borderTop: "1px solid transparent",
                borderImage:
                  "linear-gradient(to right, #7b16e600, #7A16E6, #7b16e600) 1",
                zIndex: -1,
              }}
            ></div>
            <div className="relative w-full h-full flex flex-col justify-center p-4">
              <img
                src={item.pic}
                alt={`Featured ${index + 1}`}
                className="w-full h-[60%] object-contain"
              />
              <p className="text-white mt-4 font-Sora text-[18px] font-bold">
                {item.text_one}
              </p>
              <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                {item.text_two}
              </p>
              <p className="text-white mt-2 font-Inter font-semibold text-[24px]">
                {item.text_three}
                <span className="text-[12px]"> USD</span>
              </p>
              <div className="flex flex-row gap-10 text-nowrap">
                <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                  {item.text_four}
                </p>
                <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                  {item.text_five}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden slideshow-container">
        {Featured.map((item, index) => (
          <div
            key={index}
           
          >
            <div
              className="relative w-[306px] h-[439px] rounded-[10px] border border-transparent hover:border-[#FAD33E]"
              style={{
                backgroundImage:
                  "linear-gradient(245deg, #0D002C, rgba(255, 255, 255, 0), rgba(92, 35, 203, 0.2))",
              }}
            >
              <div
                className="absolute inset-0 rounded"
                style={{
                  background: "inherit",
                  borderBottom: "1px solid transparent",
                  borderTop: "1px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #7b16e600, #7A16E6, #7b16e600) 1",
                  zIndex: -1,
                }}
              ></div>
              <div className="relative w-full h-full flex flex-col justify-center p-4">
                <img
                  src={item.pic}
                  alt={`Featured ${index + 1}`}
                  className="w-full h-[60%] object-contain"
                />
                <p className="text-white mt-4 font-Sora text-[18px] font-bold">
                  {item.text_one}
                </p>
                <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                  {item.text_two}
                </p>
                <p className="text-white mt-2 font-Inter font-semibold text-[24px]">
                  {item.text_three}
                  <span className="text-[12px]"> USD</span>
                </p>
                <div className="flex flex-row gap-10 text-nowrap">
                  <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                    {item.text_four}
                  </p>
                  <p className="text-[#A5A5AB] mt-2 font-Inter text-[14px]">
                    {item.text_five}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
       
      </div>
    </>
  );
};

export default Slide_one;
