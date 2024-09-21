import React, { useState } from "react";
import "./Button.css";

const Body = () => {
  // Separate state variables for each dropdown
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  // Toggle function for the first dropdown
  const toggleFirstDropdown = () => {
    setIsOpenFirst(!isOpenFirst);
    setIsOpenSecond(false); // Close the other dropdown when this one is toggled
  };

  // Toggle function for the second dropdown
  const toggleSecondDropdown = () => {
    setIsOpenSecond(!isOpenSecond);
    setIsOpenFirst(false); // Close the other dropdown when this one is toggled
  };

  const toggleThirdDropdown = () => {
    setIsOpenThird(!isOpenThird);
    setIsOpenSecond(false);
    setIsOpenFirst(false); // Close the other dropdown when this one is toggled
  };
  const toggleFourDropdown = () => {
    setIsOpenFour(!isOpenFour);
    setIsOpenThird(false);
    setIsOpenSecond(false);
    setIsOpenFirst(false); // Close the other dropdown when this one is toggled
  };

  const GradientCircle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div
        onClick={handleClick}
        className={`relative w-[24px] h-[20px] rounded-full  ${
          isChecked
            ? "border  bg-gradient-to-r from-[#B045F2] to-[#5944F2]"
            : "border border-gradient-to-r from-[#B045F2] to-[#5944F2]"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full  ${isChecked ? "" : ""}`}
          style={{
            borderImage: "linear-gradient(to right, #B045F2, #5944F2) ",
            borderWidth: "1px",
          }}
        ></div>
      </div>
    );
  };
  const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);

    const handleToggle = () => {
      setIsOn(!isOn);
    };

    return (
      <div
        className="relative w-[64px] h-[32px] rounded-[16px] "
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
          <button
            onClick={handleToggle}
            className="relative w-full h-full rounded-[20px] p-[2px] "
          >
            <div
              className={`flex items-center justify-between h-full text-white px-1 transition-all `}
            >
              <span className={`text-sm ${isOn ? "justify-start" : "order-2"}`}>
                {isOn ? "On" : "Off"}
              </span>
              <span
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  isOn
                    ? "transform translate-x-0"
                    : "transform translate-y-0 bg-black"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    );
  };
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

          <div className="flex md:flex-col flex-col xl:flex-row  gap-[24px] relative">
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
                      <a className="text-[#E9E9EA]" href="/story">Storyline </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="flex flex-col gap-[40px] relative">
              <div
                className="  xl:w-[1400px] xl:h-[2200px] md:min-w-[750px] md:h-[2700px] w-[260px] h-[4100px] rounded-[16px] flex flex-row"
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
                  {/* deskotp */}
                  <div className="md:block hidden  flex-col xl:px-[100px] md:px-[50px] py-[50px] gap-[56px]">
                    <div className="md:flex xl:flex 2xl:flex-row xl:flex-col md:flex-col gap-[20px] xl:w-[823px] md:w-[400px]  ">
                      <img src="/image/profile.svg"></img>
                      <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col gap-[18px]">
                          <p className="text-white">Character Name</p>
                          <input
                            type="text"
                            placeholder=" Quabis"
                            className="w-[338px] h-[40px] border border-[#D2D2D5] rounded-[8px] bg-transparent text-white placeholder-gray-500"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px]">
                          <p className="text-white">Suggestions:</p>
                          <div className="flex flex-row gap-[40px]">
                            <div className="flex flex-row gap-[8px]">
                              <button className="border border-[#D2D2D5] rounded-[4px] w-[69px] h-[32px] text-white">
                                Sylkath
                              </button>
                              <button className="border border-[#D2D2D5] rounded-[4px] w-[71px] h-[32px] text-white">
                                Xilgwyn
                              </button>
                              <button className="border border-[#D2D2D5] rounded-[4px] w-[85px] h-[32px] text-white">
                                Anasviryn
                              </button>
                              <button className="border border-[#D2D2D5] rounded-[4px] w-[67px] h-[32px] text-white">
                                Lertide
                              </button>
                              <button className="border border-[#D2D2D5] rounded-[4px] w-[60px] h-[32px] text-white">
                                Quyra
                              </button>
                            </div>
                            <button className="border border-[#F9C80E] rounded-[4px] w-[132px] h-[32px] text-[#F9C80E] hover:border-transparent hover:bg-[#F9C80E] hover:text-[#1D1F2C]">
                              + Suggest More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white flex items-center justify-center mt-10">
                      Character Preferences
                    </p>

                    <div className="flex flex-row  justify-center mt-10 xl:gap-[152px] md:gap-[50px]">
                      <div className="flex flex-col xl:gap-[32px] md:gap-[20px] xl:w-[445px] md:w-[700px]">
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Sources
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px] ">
                              Allow or restrict sources to be used for this
                              character.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Homebrew Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Magic: The Gathering Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Eberron Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Noncore D&D Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Dragonlance Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">Planescape Content</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Dice Rolling
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Enables digital dice rolling for this character
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Optional Features
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict optional features for this
                              character.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Customize Your Origin
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">
                                Optional Class Features
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Use Prerequisites
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict choices based on rule
                              prerequisites for the following for this character
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Feats</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">
                                Multiclass Requirements
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Show Level-Scaled Spells
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Display and highlight available spells to cast
                                with higher level spell slots
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Ignore Coin Weight
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Coins do not count against your total weight
                                carried (50 coins weigh I lb.)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Character Privacy
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[12px] items-start">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Campaign Only</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Only others within a Campaign you have
                                    joined can view your Characters
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="flex flex-row gap-[12px] items-start">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Public</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Anyone with a snared link can view your
                                    Characters.
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="flex flex-row gap-[12px] items-start mb-5">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Private</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Only you can view your Characters.
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col xl:gap-[32px] md:gap-[20px] xl:w-[445px] md:w-[600px]">
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Partnered Content
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict partnered content to be used for
                              this character. This content should be used only
                              at your DM's discretion.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Critical Role Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Rick and Morty Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Minecraft Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Grim Hollow Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Drakkenheim Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] ">
                              <ToggleButton />
                              <p className="text-white">Humblewood Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] ">
                              <ToggleButton />
                              <p className="text-white">Kobold Press Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">MCDM Content</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Advancement Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Story-based character progression / XP-based
                              character progression
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleFirstDropdown}
                              className="text-white z-20  border w-[330px] flex justify-center gap-[204px] border-white rounded-lg text-sm px-5 py-2.5  "
                            >
                              Milestone
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenFirst && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000]  mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Hit Point Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              When leveling up, increase hit points by the fixed
                              value for your chosen class or manually enter a
                              rolled value
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleSecondDropdown}
                              className="text-white border z-20 w-[330px] flex justify-center gap-[204px] border-white rounded-lg text-sm px-5 py-2.5  "
                            >
                              Fixed
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenSecond && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Encumbrance Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Use the standard encumbrance rules / Disable the
                              encumbrance display / Use the more detailed rules
                              for encumbrance
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleThirdDropdown}
                              className="text-white border z-20 w-[330px] flex justify-between border-white rounded-lg text-sm px-5 py-2.5 whitespace-normal"
                            >
                              <span>Use Encumbrance</span>
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenThird && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Ability Score/Modifier Display
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Reverse the arrangement Of ability modifiers and
                              scores
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleFourDropdown}
                              className="text-white border z-20 w-[330px] flex justify-between border-white rounded-lg text-sm px-5 py-2.5 whitespace-normal"
                            >
                              <span>Modifiers Top</span>
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenFour && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* mobile */}
                  <div className="md:hidden block flex-col xl:px-[100px] md:px-[10px] py-[30px] ">
                    <p className="text-white w-[146px] flex justify-center items-center ml-[90px]">
                      Character Preferences
                    </p>
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex flex-row w-[229px] gap-[14px] mt-5 ml-[10px]">
                        <img src="/image/profilem.svg"></img>
                        <div className="flex flex-col gap-[16px]">
                          <p className="text-white">Character Name</p>
                          <input
                            type="text"
                            placeholder="Quabis"
                            className="w-[155px]  h-[32px] border border-[#D2D2D5] rounded-[8px] bg-transparent text-white placeholder-gray-500"
                          />
                        </div>
                      </div>
                      <div className="ml-[10px] flex flex-col gap-[10px]">
                        <p className="text-white">Suggestions:</p>
                        <div className="flex flex-col gap-[10px]">
                          <div className="flex flex-row gap-[8px] ">
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[69px] h-[32px] text-white">
                              Sylkath
                            </button>
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[71px] h-[32px] text-white">
                              Xilgwyn
                            </button>
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[85px] h-[32px] text-white">
                              Anasviryn
                            </button>
                          </div>
                          <div className="flex flex-row gap-[8px] ">
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[85px] h-[32px] text-white">
                              Anasviryn
                            </button>
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[67px] h-[32px] text-white">
                              Lertide
                            </button>
                            <button className="border border-[#D2D2D5] rounded-[4px] w-[60px] h-[32px] text-white">
                              Quyra
                            </button>
                          </div>
                          <button className="border border-[#F9C80E] rounded-[4px] w-[132px] h-[32px] text-[#F9C80E] hover:border-transparent hover:bg-[#F9C80E] hover:text-[#1D1F2C]">
                            + Suggest More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  justify-center mt-10 xl:gap-[152px] md:gap-[50px]">
                      <div className="flex flex-col xl:gap-[32px] md:gap-[20px] xl:w-[445px] md:w-[700px] ml-[10px]">
                        <div className="flex flex-col gap-[24px] pb-1 relative ">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Sources
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px] ">
                              Allow or restrict sources to be used for this
                              character.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Homebrew Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Magic: The Gathering Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Eberron Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Noncore D&D Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Dragonlance Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">Planescape Content</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Dice Rolling
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Enables digital dice rolling for this character
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Optional Features
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict optional features for this
                              character.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Customize Your Origin
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">
                                Optional Class Features
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Use Prerequisites
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict choices based on rule
                              prerequisites for the following for this character
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Feats</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">
                                Multiclass Requirements
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Show Level-Scaled Spells
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Display and highlight available spells to cast
                                with higher level spell slots
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Ignore Coin Weight
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px] items-start mb-5">
                              <ToggleButton />
                              <p className="text-white flex-1">
                                Coins do not count against your total weight
                                carried (50 coins weigh I lb.)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div>
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Character Privacy
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[12px] items-start">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Campaign Only</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Only others within a Campaign you have
                                    joined can view your Characters
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="flex flex-row gap-[12px] items-start">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Public</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Anyone with a snared link can view your
                                    Characters.
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="flex flex-row gap-[12px] items-start mb-5">
                              <label className="container">
                                <div className="flex flex-col gap-[4px]">
                                  <p className="text-white">Private</p>
                                  <p className="text-[#A5A5AB] font-Inter text-[18px]">
                                    Only you can view your Characters.
                                  </p>
                                </div>
                                <input type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col xl:gap-[32px] md:gap-[20px] xl:w-[445px] md:w-[600px] ml-[10px] ">
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Partnered Content
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Allow or restrict partnered content to be used for
                              this character. This content should be used only
                              at your DM's discretion.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Critical Role Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">
                                Rick and Morty Content
                              </p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Minecraft Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Grim Hollow Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px]">
                              <ToggleButton />
                              <p className="text-white">Drakkenheim Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] ">
                              <ToggleButton />
                              <p className="text-white">Humblewood Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] ">
                              <ToggleButton />
                              <p className="text-white">Kobold Press Content</p>
                            </div>
                            <div className="flex flex-row gap-[8px] mb-5">
                              <ToggleButton />
                              <p className="text-white">MCDM Content</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Advancement Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Story-based character progression / XP-based
                              character progression
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleFirstDropdown}
                              className="text-white z-20  border w-[230px] gap-[100px] flex justify-center  border-white rounded-lg text-sm px-5 py-2.5  "
                            >
                              Milestone
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenFirst && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000]  mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Hit Point Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              When leveling up, increase hit points by the fixed
                              value for your chosen class or manually enter a
                              rolled value
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleSecondDropdown}
                              className="text-white border z-20 w-[230px] gap-[100px] flex justify-center  border-white rounded-lg text-sm px-5 py-2.5  "
                            >
                              Fixed
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenSecond && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Encumbrance Type
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Use the standard encumbrance rules / Disable the
                              encumbrance display / Use the more detailed rules
                              for encumbrance
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleThirdDropdown}
                              className="text-white border z-20 w-[230px] flex justify-between border-white rounded-lg text-sm px-5 py-2.5 whitespace-normal"
                            >
                              <span>Use Encumbrance</span>
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenThird && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-[24px] pb-1 relative mt-5">
                          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#a8aaad28] via-[#A8AAAD] to-[#a8aaad28]"></div>
                          <div className="flex flex-col gap-[18px]">
                            <p className="text-white font-Sora font-semibold text-[24px]">
                              Ability Score/Modifier Display
                            </p>
                            <p className="text-[#A5A5AB] font-Inter text-[16px]">
                              Reverse the arrangement Of ability modifiers and
                              scores
                            </p>
                          </div>
                          <div className="relative inline-block text-left mb-5">
                            <button
                              id="dropdownDefaultButton"
                              onClick={toggleFourDropdown}
                              className="text-white border z-20 w-[230px] flex justify-between border-white rounded-lg text-sm px-5 py-2.5 whitespace-normal"
                            >
                              <span>Modifiers Top</span>
                              <img
                                src="/image/arrowdown.svg"
                                className="ml-2"
                                alt="Arrow Down"
                              />
                            </button>

                            {isOpenFour && (
                              <div
                                id="dropdown"
                                className="absolute bg-[#000000] mt-2 w-56 border border-white rounded-md shadow-lg z-20"
                              >
                                <ul
                                  className="py-1 text-gray-700"
                                  aria-labelledby="dropdownDefaultButton"
                                >
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 hover:bg-[#ffffff2c] text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
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
      </div>
    </>
  );
};

export default Body;
