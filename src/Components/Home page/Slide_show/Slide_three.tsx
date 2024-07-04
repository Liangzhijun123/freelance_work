import React from "react";

const Slide_three = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#00000055] to-[#22223267] bg-opacity-[16%] border border-white w-[410px] h-full rounded-[32px] border-opacity-10">
        <div className="flex flex-col gap-[24px] justify-center px-[32px] py-[32px]">
          <div className="flex flex-col gap-[16px] text-left">
            <p className="text-white font-Sora font-semibold text-[32px]">
            Master
            </p>
            <p className="text-[#CAC6DD] font-Inter text-[20px]">
            AI chatbot, personalized recommendations
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="font-Sora text-[40px] text-white">$</p>
            <p className="text-white text-left font-Sora font-semibold text-[24px]">
              <span className="font-Sora font-semibold text-[88px]">5.99</span>/mo
            </p>
          </div>
          <div>
            <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[347px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
              Subscribe
            </a>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#CAC6DD] text-[18px] font-Inter text-nowrap">Character Creation - UNLIMITED</p>
            </div>
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#CAC6DD] text-[18px] font-Inter text-nowrap">Custom Encounters - UNLIMITED</p>
            </div>
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#CAC6DD] text-[18px] font-Inter">Create Homebrew Content</p>
            </div>
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#777980] text-[18px] font-Inter text-nowrap">Access Public Homebrew Library</p>
            </div>
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#777980] text-[18px] font-Inter text-nowrap">Receive Exclusive Monthly Perks</p>
            </div>
            <div className="flex flex-row gap-[16px]  border-b border-[#ffffff15] w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#777980] text-[18px] font-Inter text-nowrap">Gain Early Access to Player Tools</p>
            </div>
            <div className="flex flex-row gap-[16px]   w-[346px] h-[65px] p-4">
              <img
                src="/image/checkyello.svg"
                className=""
                alt="check"
              />
              <p className="text-[#777980] text-[18px] font-Inter text-nowrap">Share Unlocked Books and Content</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide_three;
