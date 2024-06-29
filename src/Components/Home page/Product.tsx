import React from "react";

const Product = () => {
  return (
    <>
      <div className="relative" id="home_product">
        {/* desktop  */}
        <div className="xl:mt-[100px] xl:mb-[100px] md:mt-[150px]  md:mb-[150px] mt-10 overflow-x-auto">
          <div className="hidden md:grid grid-cols-2 xl:gap-[81px] md:gap-[80px] justify-center xl:px-64 xl:w-full md:px-20 md:min-w-[1490px] mx-auto">
            <div className="flex gap-10">
              <img
                src="/image/image2.png"
                alt="image"
                className="xl:min-h-[608px] xl:min-w-[639px] md:min-h-[508px] md:min-w-[639px] min-w-full"
              />
            </div>
            <div className="flex flex-col text-left gap-[20px] xl:min-h-[635px] md:min-h-[300px] max-w-full">
              <p className=" flex items-center justify-center text-white xl:text-[16px] md:text-[12px] border border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px] w-[134px] text-center">
                Product Vision
              </p>
              <p className="text-white xl:text-[48px] md:text-[28px] font-Sora font-bold w-full xl:min-w-[610px] md:w-[500px]">
                Guiding Your Adventures The Lantern{" "}
                <span className="text-[#F9C80E]">TTRP Assistant</span>
              </p>
              <p className="text-white xl:min-w-[600px] md:max-w-[440px] xl:text-[18px] md:text-[14px]">
                Character creation can take forever. Lantern free character
                builder makes it quick and easy. Create a D&D character in
                minutes and jump into the action with your digital character
                sheet. Roll dice right from your sheet, track your spells,
                inventory, hit points, and more.
              </p>
              <div className="flex flex-col gap-[17px]">
                <div className="flex gap-[12px]">
                  <img src="/image/check.svg" alt="checkbox" />
                  <p className="xl:text-[24px] md:text-[18px] font-Sora font-bold text-white">
                    Roll Digital Dice
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src="/image/check.svg" alt="checkbox" />
                  <p className="xl:text-[24px] md:text-[18px] font-Sora font-bold text-white">
                    Manage Your Character
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src="/image/check.svg" alt="checkbox" />
                  <p className="xl:text-[24px] md:text-[18px] font-Sora font-bold text-white">
                    Customize Your Sheet
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <img src="/image/check.svg" alt="checkbox" />
                  <p className="xl:text-[24px] md:text-[18px] font-Sora font-bold text-white">
                    Ai Assisted
                  </p>
                </div>
              </div>
              <a
                href="#learnmore"
                className="h-[48px] flex justify-center text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[154px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex flex-col items-center w-full px-4 gap-[20px] p-8 md:hidden">
          <div className="flex flex-col text-center w-full gap-4 min-h-[555px]">
            <p className="text-white text-[14px] border border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[26px] w-[120px] mx-auto">
              Product Vision
            </p>
            <p className="text-white text-[24px] font-Sora font-bold w-[335px] mx-auto">
              Guiding Your Adventures The Lantern{" "}
              <span className="text-[#F9C80E]">TTRP Assistant</span>
            </p>
            <p className="text-white text-[16px] w-full">
              Character creation can take forever. Lantern free character
              builder makes it quick and easy. Create a D&D character in minutes
              and jump into the action with your digital character sheet. Roll
              dice right from your sheet, track your spells, inventory, hit
              points, and more.
            </p>
            <div className="flex flex-col gap-[17px]">
              <div className="flex items-center gap-3">
                <img src="/image/check.svg" alt="checkbox" />
                <p className="text-[18px] font-Sora font-bold text-white">
                  Roll Digital Dice
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/image/check.svg" alt="checkbox" />
                <p className="text-[18px] font-Sora font-bold text-white">
                  Manage Your Character
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/image/check.svg" alt="checkbox" />
                <p className="text-[18px] font-Sora font-bold text-white">
                  Customize Your Sheet
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/image/check.svg" alt="checkbox" />
                <p className="text-[18px] font-Sora font-bold text-white">
                  Ai Assisted
                </p>
              </div>
            </div>
            <a
              href="#learnmore"
              className="h-[48px] flex justify-center text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[335px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black mx-auto"
            >
              Learn More
            </a>
          </div>
          <div className="flex gap-10">
            <img
              src="/image/image2.png"
              alt="image"
              className="min-h-[317px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
