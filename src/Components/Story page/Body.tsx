import React, { useState } from "react";
// import Data from "./Stuff";
import Flow from "./Flow.tsx";
import '@xyflow/react/dist/style.css';


const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [istOpen, settIsOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="flex flex-row gap-[24px] xl:mt-[-150px] md:mt-[-10px]">
          {/* left section */}
          <div
            className="relative w-[80px] h-[1121px] rounded-[16px] flex flex-col"
            style={{
              backgroundColor: "black",
              border: "1px solid rgba(185, 91, 234, 0.4)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[10px]"
              style={{
                background: "inherit",
                border: "1px solid transparent",
                borderColor: "rgba(185, 91, 234, 0.4)",
                zIndex: 1,
              }}
            >
              <div className="flex flex-col  items-center gap-[40px] relative  ">
                <div className="group">
                  <img
                    src="/image/3lines.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/black3lines.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>

                <div className="group">
                  <img
                    src="/image/arrow.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackarrow.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/hand.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackhand.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/brush.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackbrush.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/text.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blacktext.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/pencil.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackpencil.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/cloud.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackcloud.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/ruler.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackruler.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/line.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackline.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
                <div className="group">
                  <img
                    src="/image/diamond.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  />

                  <img
                    src="/image/blackdiamond.svg"
                    alt="blackstar"
                    className="hidden group-hover:block relative inset-0"
                  />
                </div>
              </div>

              <div className="flex flex-col  items-center gap-[40px] relative mt-40 ">
                <div className="flex flex-col items-center gap-[24px] ">
                  <div className="group items-center flex flex-col">
                    <img
                      src="/image/layer.svg"
                      alt="blackstar"
                      className="block relative inset-0"
                    />
                    <p className=" text-[#F9C80E]">LAYERS</p>
                  </div>
                  <div className="group items-center flex flex-col ">
                    <img
                      src="/image/token.svg"
                      alt="star"
                      className="block group-hover:hidden"
                    />
                    <img
                      src="/image/blacktoken.svg"
                      alt="blackstar"
                      className="hidden group-hover:block relative inset-0"
                    />
                    <p className="text-[#ffffff70] group-hover:text-[#F9C80E]">
                      TOKEN
                    </p>
                  </div>
                  <div className="group items-center flex flex-col ">
                    <img
                      src="/image/light.svg"
                      alt="star"
                      className="block group-hover:hidden"
                    />
                    <img
                      src="/image/blacklight.svg"
                      alt="blackstar"
                      className="hidden group-hover:block relative inset-0"
                    />
                    <p className="text-[#ffffff70] group-hover:text-[#F9C80E]">
                      LIGHT
                    </p>
                  </div>
                  <div className="group items-center flex flex-col ">
                    <img
                      src="/image/map.svg"
                      alt="star"
                      className="block group-hover:hidden"
                    />
                    <img
                      src="/image/blackmap.svg"
                      alt="blackstar"
                      className="hidden group-hover:block relative inset-0"
                    />
                    <p className="text-[#ffffff70] group-hover:text-[#F9C80E]">
                      MAP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col flex-col xl:flex-row  gap-[24px] relative ">
            {/* sub menu */}
            <div
              className="relative w-[220px] h-[334px] rounded-[16px] flex flex-row"
              style={{
                backgroundColor: "black",
                border: "1px solid rgba(185, 91, 234, 0.4)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[16px] "
                style={{
                  background: "inherit",
                  border: "1px solid transparent",
                  borderColor: "rgba(185, 91, 234, 0.4)",
                  zIndex: 1,
                }}
              >
                <div className="flex flex-col justify-center py-5  gap-[24px]">
                  <p className="font-Sora font-semibold flex items-center justify-center text-[20px] text-white">
                    Sub-menu
                  </p>
                  <div className="flex flex-col">
                    <div
                      id="menu"
                      className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]"
                    >
                      <a href="/menu" className="text-[#E9E9EA]">
                        Menu
                      </a>
                    </div>
                    <div className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]">
                      <a href="/editor" className="text-[#E9E9EA]">
                        Editor
                      </a>
                    </div>
                    <div className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]">
                      <a className="text-[#E9E9EA]">Sub-menu 1</a>
                    </div>
                    <div className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]">
                      <a className="text-[#E9E9EA]">Sub-menu 2</a>
                    </div>
                    <div className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]">
                      <a className="text-[#E9E9EA]">Sub-menu 3</a>
                    </div>
                    <div className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#000000]">
                      <a className="text-[#E9E9EA]" href="/story">
                        Storyline{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="flex flex-col gap-[40px] relative">
              <div
                className="relative w-[1272px] h-[863px] rounded-[16px] flex flex-row"
                style={{
                  backgroundColor: "black",
                  border: "1px solid rgba(185, 91, 234, 0.4)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[16px] "
                  style={{
                    background: "inherit",
                    border: "1px solid transparent",
                    borderColor: "rgba(185, 91, 234, 0.4)",
                    zIndex: 1,
                  }}
                >
                  <div className="flex flex-col gap-[47px] py-10 px-10">
                    <div className="flex flex-col gap-[24px] justify-center items-center ">
                      <p className="text-white">Story</p>
                      <p className="text-white">
                        Rediscover classic adventures with new Dynamic Lighting
                        and our latest features.
                      </p>
                    </div>
                    <div className="flex flex-row gap-[15px]  items-center">
                      <div className="w-[285px] h-[600px] border border-[#b85bea41] rounded-[8px] bg-gradient-to-tl from-[#ffffff00] to-[#5b23cb42]">
                        <div className="flex flex-col justify-center items-center gap-[25px]">
                          <div className="relative flex flex-row gap-[29px] py-[16px] px-[24px] ">
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r  from-[#a8aaad1b] via-[#A8AAAD] to-[#a8aaad1b]"></div>
                            <p className="text-white">Home</p>

                            <div className="relative flex gap-[5px] items-center">
                              {/* Image */}
                              <img src="/image/doc.svg" alt="Document Icon" />

                              {/* Arrow as dropdown trigger */}
                              <div
                                className="cursor-pointer flex items-center"
                                onClick={() => setIsOpen(!isOpen)}
                              >
                                <img
                                  src="/image/arrow-down.svg"
                                  alt="Dropdown Arrow"
                                  className={`transition-transform duration-200 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </div>

                              {/* Dropdown menu */}
                              {isOpen && (
                                <div className="absolute top-full left-[-50px] mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                  <ul className="flex flex-col p-2">
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 1
                                    </li>
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 2
                                    </li>
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 3
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <div className="relative flex gap-[5px] items-center">
                              {/* Image */}
                              <img
                                src="/image/download.svg"
                                alt="Document Icon"
                              />

                              {/* Arrow as dropdown trigger */}
                              <div
                                className="cursor-pointer flex items-center"
                                onClick={() => settIsOpen(!istOpen)}
                              >
                                <img
                                  src="/image/arrow-down.svg"
                                  alt="Dropdown Arrow"
                                  className={`transition-transform duration-200 ${
                                    istOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </div>

                              {/* Dropdown menu */}
                              {istOpen && (
                                <div className="absolute top-full left-[-50px] mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                  <ul className="flex flex-col p-2">
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 1
                                    </li>
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 2
                                    </li>
                                    <li className="hover:bg-gray-100 p-2 cursor-pointer">
                                      Option 3
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>

                            <img src="/image/setting.svg" alt="Settings Icon" />

                            {/* Overlaying border */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#a8aaad17] via-[#A8AAAD] to-[#a8aaad17]"></div>
                          </div>

                          <p className="text-white">My First Story</p>
                          <div
                            id="Campaigns"
                            className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#0000001d]"
                          >
                            <a className="text-[#E9E9EA]">Campaigns</a>
                          </div>
                          <div className="flex flex-row gap-[10px] relative pb-[15px] ">
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                            <input
                              type="text"
                              placeholder="Campaigns Title"
                              className="bg-transparent placeholder-gray-500 text-white rounded-lg focus:outline-none "
                            />

                            <a className="flex justify-center items-center hover:text-black hover:bg-[#F9C80E] text-[#F9C80E] w-[70px] h-[32px] rounded-[4px] border border-[#F9C80E]">
                              Add
                            </a>
                          </div>
                          <div
                            id="Characters"
                            className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#0000001d]"
                          >
                            <a className="text-[#E9E9EA]">Characters</a>
                          </div>
                          <div
                            id="Locations"
                            className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#0000001d]"
                          >
                            <a className="text-[#E9E9EA]">Locations</a>
                          </div>
                          <div
                            id="Notes"
                            className="px-[10px]  h-[40px] p-2 w-full hover:bg-gradient-to-r from-[#53546c4a] to-[#0000001d]"
                          >
                            <a className="text-[#E9E9EA]">Notes</a>
                          </div>
                          <div className="flex flex-row gap-[10px] relative  ">
                            <div className="flex justify-center items-center w-[77px] h-[45px] bg-gradient-to-r from-[#5b23cb32] to-[#ffffff0a] rounded-[10px]">
                              <p className="text-white text-[13px] ">
                                Story Line
                              </p>
                            </div>
                            <div className="flex justify-center items-center w-[77px] h-[45px] bg-gradient-to-r from-[#5b23cb32] to-[#ffffff0a] rounded-[10px]">
                              <p className="text-white text-[13px] ">
                                Time Line
                              </p>
                            </div>
                            <div className="flex justify-center items-center w-[77px] h-[45px] bg-gradient-to-r from-[#5b23cb32] to-[#ffffff0a] rounded-[10px]">
                              <p className="text-white text-[13px] ">Season</p>
                            </div>
                          </div>
                          <a className="flex justify-center items-center hover:text-black hover:bg-[#F9C80E] text-[#F9C80E] w-[253px] h-[48px] rounded-[4px] border border-[#F9C80E]">
                            Get Started For Free
                          </a>
                        </div>
                      </div>
                      <div className="w-[908px] h-[600px] border border-[#b85bea41] rounded-[8px] bg-gradient-to-r from-[#5b23cb42] to-[#ffffff00]">
                        <div className="flex justify-center items-center">
                           {/* <Data />  */}
                           <Flow />
                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
