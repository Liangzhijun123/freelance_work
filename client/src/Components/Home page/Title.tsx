import React from "react";


const Title = () => {
  return (
    <>
      <div id="home_title" className="relative overflow-hidden mx-auto ">
        {/* Desktop image */}
        <img
          src="/image/title-image.svg"
          alt="image"
          className="w-full h-auto hidden md:block object-cover object-center"
        />
        {/* Mobile image */}
        <img
          src="/image/title-image1.svg"
          alt="image"
          className="w-full h-auto block md:hidden object-cover object-center"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center xl:gap-5 md:gap-[12px] gap-[16px] w-full max-w-[1155px] mx-auto px-4">
            <p className="text-white text-[14px] md:text-[16px] xl:text-[16px] font-Inter text-nowrap border-[#7D6407] border-2 bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px] w-full max-w-[368px] text-center">
              Dungeons & Dragons Campaign Management
            </p>

            <p className="text-white text-[32px] md:text-[52px] xl:text-[72px] font-Sora font-bold xl:w-[1155px] md:w-[600px] w-[300px] text-center">
              Light Up Your Journey With{" "}
              <span className="text-[#F9C80E]"> Lantern Glow </span>
            </p>
            <p className="text-white text-[16px] md:text-[18px] xl:text-[18px] font-Inter leading-[28.8px] text-center w-full max-w-[822px]">
              Character creation can take forever. Lantern free character
              builder makes it quick and easy. Create a D&D character in minutes
              and jump into the action with your digital character sheet. Roll
              dice right from your sheet, track your spells, inventory, hit
              points, and more.
            </p>
            <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[232px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
