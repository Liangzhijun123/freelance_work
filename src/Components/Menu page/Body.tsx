import React, { useState } from "react";

const dummy = [
  {
    src: "/image/pic_1.svg",
    title: "Backgrounds",
    description:
      "View the New backgrounds that users around the world have created and shared, or create your own.",
    button1: "View New Backgrounds",
    button2: "Create New Backgrounds",
  },
  {
    src: "/image/pic_2.svg",
    title: "Feats",
    description:
      "View the New feats that users around the world have created and shared, or create your own.",
    button1: "View New Feats",
    button2: "Create New Feats",
  },
  {
    src: "/image/pic_3.svg",
    title: "Magic Items",
    description:
      "View the New magic items that users around the world have created and shared, or create your own.",
    button1: "View New Magic Items",
    button2: "Create New Magic Items",
  },
  {
    src: "/image/pic_4.svg",
    title: "Monsters",
    description:
      "View the New monster? that users around the world have created and shared, or create your own.",
    button1: "View New Monsters",
    button2: "Create New Monsters",
  },
  {
    src: "/image/pic_5.svg",
    title: "Races",
    description:
      "View the homebrew races that users around the world have created and shared, or create your own.",
    button1: "View New Races",
    button2: "Create New Races",
  },
  {
    src: "/image/pic_6.svg",
    title: "Spells",
    description:
      "View the New spells that users around the world have created and shared, or create your own.",
    button1: "View New Spells",
    button2: "Create New Spells",
  },
  {
    src: "/image/pic_7.svg",
    title: "Subclasses",
    description:
      "View the New subclasses that users around the world have created and shared, or create your own.",
    button1: "View New Subclasses",
    button2: "Create New Subclasses",
  },
];

const Body = () => {
  return (
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
                    <a className="text-[#E9E9EA]">Storyline </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="flex flex-col gap-[40px] relative">
            <div className="w-full md:h-[88px] h-[100px] md:mb-[40px] mb-[70px]">
              <div className="flex flex-col md:flex-row gap-[16px] md:gap-[40px] border-b-[#F9C80E] border-b pb-4">
                <p className="text-white font-Sora font-semibold text-[32px]">
                  Menu
                </p>

                <div className="flex flex-col md:flex-row gap-[16px] md:mt-5 mt-0 md:ml-auto ml-0">
                  <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[230px] w-full h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                    View New Creations
                  </a>
                  <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[230px] w-full h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                    View New Collection
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[32px] md:gap-[24px] gap-[24px] xl:mt-0 md:mt-5">
              {dummy.map((item, index) => (
                <div
                  className="relative overflow-hidden rounded-[16px]"
                  key={index}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="xl:w-[620px] xl:h-[291px] md:w-[350px] md:h-[450px] h-[300px] object-cover rounded-t-[16px]"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center xl:gap-[21px] md:gap-[18px] gap-[10px] ">
                    <div className="flex flex-col gap-[16px] items-center text-center">
                      <p className="text-white font-Sora font-semibold md:text-[40px] text-[24px]">
                        {item.title}
                      </p>
                      <p className="text-white font-Inter font-medium md:text-[18px] text-[16px] xl:w-[556px] md:w-[350px] w-full">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-col xl:flex-row  gap-[10px] items-center">
                      <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[275px] w-full h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                        {item.button1}
                      </a>
                      <a className="text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 md:w-[275px] w-full h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                        {item.button2}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
