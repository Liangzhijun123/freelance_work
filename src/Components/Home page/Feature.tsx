import React from "react";

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
            <div className="relative w-[1320px] h-[435px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[rgba(18,18,18,0.33)] to-[rgba(83,84,108,0.33)]">
              <div className="flex flex-row gap-[139px] justify-center items-center p-14 ">
                {Choose.map((item, index) => (
                  <div key={index} className="flex flex-row gap-[20px] items-center w-full justify-center">
                    {item.img}
                    <div className="flex flex-col text-left gap-[32px] w-[557px]">
                      <p className="text-white">{item.title}</p>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-white w-[450px]">{item.text}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-white w-[450px]">{item.text1}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-white w-[450px]">{item.text2}</p>
                      </div>
                      <div className="flex flex-row gap-[17px]">
                        {item.check}
                        <p className="text-white w-[450px]">{item.text3}</p>
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
