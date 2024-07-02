import React from "react";

// test 1
const Choose = [
  {
    img: <img src="/image/image3.svg" alt="image3" />,
    title: "Roll Digital Dice",
    text: "Leave the dice at home - our digital solution ensures you're always ready to roll.",
    text1:
      "Simply tap or click on your character sheet, and watch as the dice come to life, rolling across.",
    text2:
      "Say goodbye to tedious calculations – our system handles all the math for you, so you can focus.",
    text3:
      "Whether you're in the midst of an epic quest or embarking on a spontaneous adventure.",
    pic: <img src="/image/rect.svg" alt="image3" />,
    check: <img src="/image/checkyello.svg" alt="image3" />,
  },
];
const Choose1 = [
  {
    img: <img src="/image/image4.svg" alt="image3" />,
    title: "Manage Your Character",
    text: "Effortlessly manage hit points, spells, equipment, and notes within a single, streamlined interface.",
    text1:
      "Level up swiftly with intuitive controls, or seamlessly switch race and class with minimal interruption.",
    text2:
      "Enhance your experience by easily integrating animal companions and familiars.",
    text3:
      "Enjoy unparalleled flexibility as you adapt your character's progression with the swift click.",
    pic: <img src="/image/rect1.svg" alt="image3" />,
    check: <img src="/image/checkpurple.svg" alt="image3" />,
  },
];

const Choose2 = [
  {
    img: <img src="/image/image3.svg" alt="image3" />,
    title: "Customize Your Sheet",
    text: "Tailor your gaming adventure with personalized homebrew content, from custom spells.",
    text1:
      "Transform the world of magic by renaming spells to fit your narrative and thematic preferences.",
    text2:
      "Amplify your character's identity by incorporating portraits, backdrops, and themes into your D&D.",
    text3:
      "Dive deeper into creativity by seamlessly integrating custom elements, allowing you to craft a gaming.",
    pic: <img src="/image/rect3.svg" alt="image3" />,
    check: <img src="/image/checkyello.svg" alt="image3" />,
  },
];
const Feature = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col justify-center items-center gap-[80px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <p className="text-white text-[16px] border border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px] w-[164px] mx-auto">
            Lantern's features
          </p>
          <p className="text-white md:text-[48px] text-[24px] font-Sora font-semibold w-full text-center">
            Why <span className="text-[#F9C80E]">Choose Us</span>
          </p>
          <p className="text-[#CAC6DD] md:text-[18px] text-[16px] font-Inter md:w-[573px] w-[335px] text-center">
            Access all three services in one convenient bundle, available only
            through our platform. Unmatched convenience guaranteed.
          </p>
        </div>
        <div className="flex xl:w-[1320px] xl:h-[435px] md:min-w-[850px] w-[335px] md:h-[400px] rounded-[20px] bg-gradient-to-r from-[rgba(18,18,18,0.22)] to-[rgba(83,84,108,0.22)]">
          <div className="content flex flex-col md:flex-row h-full w-full justify-center items-center p-6 md:p-12">
            <div className="flex flex-row md:flex-row items-center md:items-start">
              <div className="md:w-[41px] md:h-[279px] flex-none w-[55px] h-[400px] ">
                <img src="/image/image3.svg" alt="image" />
              </div>
              <div className="flex md:h-[371px] min-h-[350px] md:max-w-[557px] w-full flex-col xl:gap-[40px] md:gap-[24px] gap-[16px] p-4 text-left">
                <div className="h-6 w-full">
                  <p className="text-white font-Sora xl:text-[32px] md:text-[24px] text-[22px]">
                    Roll Digital Dice
                  </p>
                </div>
                <div className="flex flex-col xl:gap-[20px] md:gap-[24px] gap-[16px] xl:h-[557px] md:h-[350px]">
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Leave the dice at home - our digital solution ensures
                      you're always ready to roll.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Simply tap or click on your character sheet, and watch as
                      the dice come to life, rolling across.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Say goodbye to tedious calculations – our system handles
                      all the math for you, so you can focus.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Whether you're in the midst of an epic quest or embarking
                      on a spontaneous adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full mx-auto">
              <img src="/image/rect.svg" alt="rect" />
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1320px] xl:h-[435px] md:min-w-[850px] w-[335px] md:h-[400px] rounded-[20px] bg-gradient-to-r from-[rgba(18,18,18,0.22)] to-[rgba(83,84,108,0.22)]">
          <div className="content flex flex-col md:flex-row h-full w-full justify-center items-center p-6 md:p-12">
            <div className="flex flex-row md:flex-row items-center md:items-start">
              <div className="md:w-[41px] md:h-[279px] flex-none w-[55px] h-[400px] ">
                <img src="/image/image4.svg" alt="image" />
              </div>
              <div className="flex md:h-[371px] min-h-[350px] md:max-w-[557px] w-full flex-col xl:gap-[40px] md:gap-[24px] gap-[16px] p-4 text-left">
                <div className="h-6 w-full">
                  <p className="text-white text-nowrap font-Sora xl:text-[32px] md:text-[24px] text-[22px]">
                    Manage Your Character
                  </p>
                </div>
                <div className="flex flex-col xl:gap-[20px] md:gap-[24px] gap-[16px] xl:h-[557px] md:h-[350px]">
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkpurple.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Effortlessly manage hit points, spells, equipment, and
                      notes within a single, streamlined interface.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkpurple.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Level up swiftly with intuitive controls, or seamlessly
                      switch race and class with minimal interruption.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkpurple.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Enhance your experience by easily integrating animal
                      companions and familiars.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkpurple.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Enjoy unparalleled flexibility as you adapt your
                      character's progression with the swift click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full mx-auto">
              <img src="/image/rect1.svg" alt="rect" />
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1320px] xl:h-[435px] md:min-w-[850px] w-[335px] md:h-[400px] rounded-[20px] bg-gradient-to-r from-[rgba(18,18,18,0.22)] to-[rgba(83,84,108,0.22)]">
          <div className="content flex flex-col md:flex-row h-full w-full justify-center items-center p-6 md:p-12">
            <div className="flex flex-row md:flex-row items-center md:items-start">
              <div className="md:w-[41px] md:h-[279px] flex-none w-[55px] h-[400px] ">
                <img src="/image/image3.svg" alt="image" />
              </div>
              <div className="flex md:h-[371px] min-h-[350px] md:max-w-[557px] w-full flex-col xl:gap-[40px] md:gap-[24px] gap-[16px] p-4 text-left">
                <div className="h-6 w-full">
                  <p className="text-white text-nowrap font-Sora xl:text-[32px] md:text-[24px] text-[22px]">
                  Customize Your Sheet
                  </p>
                </div>
                <div className="flex flex-col xl:gap-[20px] md:gap-[24px] gap-[16px] xl:h-[557px] md:h-[350px]">
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Effortlessly manage hit points, spells, equipment, and
                      notes within a single, streamlined interface.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Level up swiftly with intuitive controls, or seamlessly
                      switch race and class with minimal interruption.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Enhance your experience by easily integrating animal
                      companions and familiars.
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start">
                    <img
                      src="/image/checkyello.svg"
                      className="xl:h-[25px] md:h-[20px] h-[16px]"
                      alt="check"
                    />
                    <p className="text-[#CAC6DD] xl:text-[18px] md:text-[16px] text-[14px] font-Inter">
                      Enjoy unparalleled flexibility as you adapt your
                      character's progression with the swift click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full mx-auto">
              <img src="/image/rect3.svg" alt="rect" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
