import React from "react";

const Body = () => {
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
              className="relative w-[1272px] h-[763px] rounded-[16px] flex flex-row"
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
                        <div className="w-[285px] h-[536px] border border-[#b85bea41] rounded-[8px] bg-gradient-to-tl from-[#ffffff00] to-[#5b23cb42]">

                        </div>
                        <div className="w-[908px] h-[536px] border border-[#b85bea41] rounded-[8px] bg-gradient-to-r from-[#5b23cb42] to-[#ffffff00]">

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
