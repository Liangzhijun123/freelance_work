import React from "react";

const Slide_three = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
      <div className="bg-gradient-to-b from-[#00000055] to-[#22223267] bg-opacity-[16%] border border-white xl:w-[410px] md:min-w-[350px] w-[335px] h-full rounded-[32px] border-opacity-10">
        <div className="flex flex-col gap-[24px] justify-center px-[32px] py-[32px]">
          <div className="flex flex-col gap-[16px] text-left break-words">
              <p className="text-white font-Sora font-semibold text-[32px]">
              Master
              </p>
              <p className="text-[#CAC6DD] font-Inter text-[20px]">
              AI chatbot, personalized recommendations
              </p>
            </div>
            <div className="flex flex-row items-center break-words">
              <p className="font-Sora text-[40px] text-white">$</p>
              <p className="text-white text-left font-Sora font-semibold text-[24px]">
                <span className="font-Sora font-semibold text-[88px]">
                5.99
                </span>
                /mo
              </p>
            </div>
            <div>
              <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[347px] w-[287px] max-w-full h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                Subscribe
              </a>
            </div>
            <div className="flex flex-col break-words">
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#CAC6DD] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Character Creation - UNLIMITED
                </p>
              </div>
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#CAC6DD] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Custom Encounters - UNLIMITED
                </p>
              </div>
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#CAC6DD] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Create Homebrew Content
                </p>
              </div>
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#777980] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Access Public Homebrew Library
                </p>
              </div>
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#777980] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Receive Exclusive Monthly Perks
                </p>
              </div>
              <div className="flex flex-row gap-[16px] border-b border-[#ffffff15] w-full xl:h-[65px] md:h-full p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#777980] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Gain Early Access to Tools
                </p>
              </div>
              <div className="flex flex-row gap-[16px] w-full h-[65px] p-4">
                <img src="/image/checkyello.svg" alt="check" />
                <p className="text-[#777980] text-[18px] font-Inter xl:text-nowrap md:text-wrap">
                  Share Unlocked Books and Content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide_three;
