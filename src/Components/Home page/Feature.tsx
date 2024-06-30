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
      <>
        <div className="mt-[150px]">
          <div className="flex flex-col justify-center items-center gap-[80px]">
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <p className="text-white text-[16px] border border-[#7D6407] font-Inter bg-[#3E3204] bg-opacity-60 rounded-[16px] h-[28px] w-[164px] mx-auto">
                Lantern's features
              </p>
              <p className="text-white text-[48px] font-Sora font-semibold w-full">
                Why
                <span className="text-[#F9C80E]"> Choose Us</span>
              </p>
              <p className="text-white text-[18px] font-Inter w-[573px]">
                Access all three services in one convenient bundle, available only
                through our platform. Unmatched convenience guaranteed.
              </p>
            </div>
            <div className="relative xl:w-[1320px] xl:h-[435px] md:w-[850px] md:h-[435px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[rgba(18,18,18,0.33)] to-[rgba(83,84,108,0.33)]">
            <div className="flex flex-row xl:gap-[139px] md:gap-[50px] justify-center items-center xl:p-14 md:p-12 xl:px-10 md:px-10">
                {Choose.map((item, index) => (
                  <div key={index} className="flex flex-row gap-[20px] items-center w-full  justify-center">
                    {item.img}
                    <div className="flex flex-col text-left gap-[16px] w-[557px]">
                      <p className="text-white font-Sora text-[32px]">{item.title}</p>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px] ">{item.text}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text1}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text2}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text3}</p>
                      </div>
                    </div>
                    {item.pic}
                  </div>
                ))}
                
              </div>
            </div>
            <div className="relative xl:w-[1320px] xl:h-[435px] md:w-[850px] md:h-[335px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[rgba(18,18,18,0.33)] to-[rgba(83,84,108,0.33)]">
              <div className="flex flex-row xl:gap-[139px] md:gap-[90px] justify-center items-center xl:p-14 md:p-10 xl:px-10 md:px-20">
                {Choose1.map((item, index) => (
                  <div key={index} className="flex flex-row gap-[20px] items-center w-full  justify-center">
                    {item.img}
                    <div className="flex flex-col text-left gap-[16px] w-[557px]">
                      <p className="text-white font-Sora text-[32px]">{item.title}</p>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px] ">{item.text}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text1}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text2}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text3}</p>
                      </div>
                    </div>
                    {item.pic}
                  </div>
                ))}
                
              </div>
            </div>
            <div className="relative xl:w-[1320px] xl:h-[435px] md:w-[850px] md:h-[335px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[rgba(18,18,18,0.33)] to-[rgba(83,84,108,0.33)]">
            <div className="flex flex-row xl:gap-[139px] md:gap-[90px] justify-center items-center xl:p-14 md:p-10 xl:px-10 md:px-20">
                {Choose2.map((item, index) => (
                  <div key={index} className="flex flex-row gap-[20px] items-center w-full  justify-center">
                    {item.img}
                    <div className="flex flex-col text-left gap-[16px] w-[557px]">
                      <p className="text-white font-Sora text-[32px]">{item.title}</p>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px] ">{item.text}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text1}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text2}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-[#CAC6DD] text-[18px] w-[450px]">{item.text3}</p>
                      </div>
                    </div>
                    {item.pic}
                  </div>
                ))}
                
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  };

export default Feature;
