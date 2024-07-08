import React from "react";

const Title = () => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto">
        <img
          src="/image/store-title.svg"
          alt="image"
          className="w-full xl:h-auto md:min-h-[800px] hidden md:block object-cover object-center"
        />
        <img
          src="/image/store-titlem.svg"
          alt="image"
          className="w-full h-auto block md:hidden object-cover object-center"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col justify-center xl:gap-5 md:gap-[12px] gap-[16px] w-full max-w-[1155px] mx-auto xl:px-4 md:px-20 px-5 xl:mt-[-200px] md:mt-[-300px]">
            
            <p className="text-white text-[32px] md:text-[52px] xl:text-[48px] font-Sora font-bold xl:w-[800px] md:w-[650px] w-full text-left">
              Revive adventures with{" "}
              <span className="text-[#F9C80E]"> Dynamic Lighting! </span>
            </p>
            <p className="text-white text-[16px] md:text-[18px] xl:text-[18px] font-Inter text-left w-full md:max-w-[822px] xl:w-full">
              Rediscover classic adventures with new Dynamic Lighting and our latest features.
            </p>
            <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[232px] w-full max-w-[335px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
