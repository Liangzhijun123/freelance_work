import React from "react";
const Featured = [
    {
      pic: "/image/pic_18.svg",
      text_one: "Battle Through the..",
    },
    
  ];
const Slide_two = () => {
    return ( 
        <>
        {/* Desktop View */}
      <div className="hidden md:flex flex-row  gap-[16px] ">
        {Featured.map((item, index) => (
          <div
            key={index}
            className="relative h-[303px]  w-[200px] rounded-[10px] border border-transparent hover:border-[#FAD33E]"
            style={{
                backgroundColor: '#7D6407'
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
            <div className="relative w-full h-full flex flex-col top-4 px-2">
              <img
                src={item.pic}
                alt={`Featured ${index + 1}`}
                className="w-[184px]   "
              />
              <p className="text-white mt-4 font-Sora text-[18px] font-bold text-nowrap">
                {item.text_one}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-center">
        {Featured.map((item, index) => (
          <div
          key={index}
          className="relative h-[303px]  w-[200px] rounded-[10px] border border-transparent hover:border-[#FAD33E]"
          style={{
              backgroundColor: '#7D6407'
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
            <div className="relative w-full h-full flex flex-col p-1">
              <img
                src={item.pic}
                alt={`Featured ${index + 1}`}
                className="w-[184px] "
              />
              <p className="text-white mt-4 font-Sora text-[18px] font-bold">
                {item.text_one}
              </p>
            </div>
          </div>
        ))}
      </div>
        </>
     );
}
 
export default Slide_two;