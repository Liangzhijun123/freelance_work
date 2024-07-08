import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-[12px] justify-center items-center w-full md:mt-0 mt-20">
        <div className="flex xl:w-[1100px] md:w-[600px] w-[335px] h-[48px] border-[0.5px] border-[#F9C80E] rounded-[8px]">
          <div className="flex flex-row gap-[8px] justify-center items-center px-5">
            <img src="/image/search.svg" className="h-[19.5px] w-[19.5px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white text-[18px] font-Inter font-light outline-none"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[12px]">
          <div className="flex justify-center flex-none md:w-[116px] w-[243px] h-[48px] border-[0.5px] border-[#F9C80E] hover:bg-[#F9C80E] p-2 rounded-[8px]">
            <a className="font-Inter font-medium text-[18px] hover:text-black text-white">Search</a>
          </div>
          <div className="">
          <a className="flex justify-center items-center flex-none w-[80px] h-[48px] border-[0.5px] border-[#F9C80E] p-2 rounded-[8px] hover:bg-[#F9C80E] ">
                <img
                  src="/image/slider.svg"
                  alt="LinkedIn"
                  className="absolute   opacity-100 hover:opacity-0"
                />
                <img
                  src="/image/blackslider.svg"
                  alt="LinkedIn Hover"
                  className="absolute   opacity-0 hover:opacity-100"
                />
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
