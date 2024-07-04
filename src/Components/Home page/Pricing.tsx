import React from "react";
import Slide_one from "./Slide_show/Slide_one.tsx";
import Slide_two from "./Slide_show/Slide_two.tsx";
import Slide_three from "./Slide_show/Slide_three.tsx";

const Pricing = () => {
  return (
    <>
      <div className="mt-[150px]">
        <div>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <p className="text-white text-[16px] border border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px] w-[76px] mx-auto">
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
                    <a className="text-white hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">Monthly</a>
                </div>
                <div className="hover:bg-[#F9C80E] md:w-[140px] w-[120px] h-[37px] md:h-[48px] md:p-3 p-2 rounded-[12px]">
                    <a className="text-white text-nowrap hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">Semi-annually</a>
                </div>
                <div className="hover:bg-[#F9C80E] md:w-[140px] w-[95px] h-[37px] md:h-[48px] md:p-3 p-2 rounded-[12px]">
                    <a className="text-white hover:text-black font-Inter font-medium md:text-[16px] text-[14px]">Annually</a>
                </div>

            </div>
a
            {/* slide show rectangle components */}
            <div className="flex md:flex-row flex-col justify-center gap-[24px] mt-8">
              <Slide_one />
              <Slide_two />
              <Slide_three />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
