import React from "react";

const Body = () => {
  return (
    <div className="flex">
      <div className="flex flex-row gap-[24px] mt-[-150px]">
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
                  {/* <img
                    src="/image/blacklayer.svg"
                    alt="star"
                    className="block group-hover:hidden"
                  /> */}
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

        <div className="flex flex-row  gap-[24px] relative ">
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
                    <a className="text-[#E9E9EA]">Editor</a>
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
          <div className="flex flex-col gap-[40px]">
            <div className="w-[1272px] h-[88px] flex flex-row mb-[40px] gap-[697px] border-b-[#F9C80E] border-b">
              <div>
                <p className="text-white font-Sora font-semibold text-[32px]">
                  Menu
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
                <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[230px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                  View New Creations
                </a>
                <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[230px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                  View New Collection
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[32px]">
              <div className="relative">
                <img src="/image/pic_1.svg" className="" alt="Background" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[21px]">
                  <div className="flex flex-col gap-[16px] items-center">
                    <p className="text-white font-Sora font-semibold text-[40px]">
                      Backgrounds
                    </p>
                    <p className="text-white font-Inter font-medium text-[18px] w-[556px] text-center">
                      View the New backgrounds that users around the world have
                      created and shared, or create your own.
                    </p>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center">
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      View New Backgrounds
                    </a>
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      Create New Backgrounds
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/image/pic_2.svg" className="" alt="Background" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[21px]">
                  <div className="flex flex-col gap-[16px] items-center">
                    <p className="text-white font-Sora font-semibold text-[40px]">
                      Feats
                    </p>
                    <p className="text-white font-Inter font-medium text-[18px] w-[556px] text-center">
                      View the New feats that users around the world have
                      created and shared, or create your own.
                    </p>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center">
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      View New Feats
                    </a>
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      Create New Feats
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/image/pic_3.svg" className="" alt="Background" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[21px]">
                  <div className="flex flex-col gap-[16px] items-center">
                    <p className="text-white font-Sora font-semibold text-[40px]">
                      Magic Items
                    </p>
                    <p className="text-white font-Inter font-medium text-[18px] w-[556px] text-center">
                      View the New magic items that users around the world have
                      created and shared, or create your own.
                    </p>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center">
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      View New Magic Items
                    </a>
                    <a className="text-[#F9C80E]  font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[275px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black flex items-center justify-center">
                      Create New Magic Items
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
