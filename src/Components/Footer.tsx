import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative mt-[150px]">
      {/* Gradient Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#7b16e600] via-[#7A16E6] to-[#7b16e600]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#7b16e600] via-[#7A16E6] to-[#7b16e600]"></div>

      <div className="flex flex-col xl:gap-[32px] md:gap-[24px]">
        <div
          className="flex md:flex-row flex-col justify-between w-full xl:gap-[138px] md:gap-[55px] h-full xl:p-20 md:p-10 p-4 xl:px-[300px] md:px-[50px] px-5"
          style={{
            borderBottom: "1px solid transparent",
            borderImage:
              "linear-gradient(to right, #7b16e600, #7A16E6, #7b16e600) 1",
          }}
        >
          <div className="flex flex-col gap-[20px] text-left">
            <p className="text-white font-Sora text-[32px] font-semibold">
              Lantern
            </p>
            <div className="flex flex-col gap-[10px]">
              <a className="text-[#D2D2D5] text-[18px] font-[Inter]">
                Premium Elo
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter]">
                Boosting Services
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter]">
                Boost Your Game Skills
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter]">
                Reach Your Dream Online Ranks!
              </a>
            </div>
            <div className="flex flex-row gap-[12px] justify-between  w-[228px]">
              <a className="relative flex items-center justify-center border border-[#F9C80E] rounded-[8px] p-2 w-[48px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E]">
                <img
                  src="/image/twitter.svg"
                  alt="Twitter"
                  className="absolute  transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src="/image/blacktwitter.svg"
                  alt="Twitter Hover"
                  className="absolute  transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </a>

              <a className="relative flex items-center justify-center border border-[#F9C80E] rounded-[8px] p-2 w-[48px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E]">
                <img
                  src="/image/instagram.svg"
                  alt="Instagram"
                  className="absolute   opacity-100 hover:opacity-0"
                />
                <img
                  src="/image/blackinstagram.svg"
                  alt="Instagram Hover"
                  className="absolute   opacity-0 hover:opacity-100"
                />
              </a>
              <a className="relative flex items-center justify-center border border-[#F9C80E] rounded-[8px] p-2 w-[48px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E]">
                <img
                  src="/image/linkedin.svg"
                  alt="LinkedIn"
                  className="absolute   opacity-100 hover:opacity-0"
                />
                <img
                  src="/image/blacklinkedin.svg"
                  alt="LinkedIn Hover"
                  className="absolute   opacity-0 hover:opacity-100"
                />
              </a>
              <a className="relative flex items-center justify-center border border-[#F9C80E] rounded-[8px] p-2 w-[48px] h-[48px] transition-colors duration-300 hover:bg-[#F9C80E]">
                <img
                  src="/image/discord.svg"
                  alt="Discord"
                  className="absolute   opacity-100 hover:opacity-0"
                />
                <img
                  src="/image/blackdiscord.svg"
                  alt="Discord Hover"
                  className="absolute   opacity-0 hover:opacity-100"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] text-left">
            <p className="text-white font-Inter text-[24px] font-medium">
              Support
            </p>
            <div className="flex flex-col gap-[10px]">
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">
                Help Portal
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">
                Support Forum
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">
                Don't sell or Share My Info
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">Cookies</a>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] text-left">
            <p className="text-white font-Inter text-[24px] font-medium">
              About
            </p>
            <div className="flex flex-col gap-[10px]">
              <a className="text-[#D2D2D5] text-[18px] font-[Inter]">
                Contact Us
              </a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">Careers</a>
              <a className="text-[#D2D2D5] text-[18px] font-[Inter] text-nowrap">
                Wizards of the Coast
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] text-left">
            <p className="text-white font-Inter text-[24px] font-medium">
              Lantern App
            </p>
            <div className="flex flex-col gap-[10px]">
              <a href="">
                <img src="/image/google.svg" alt="Google Play"></img>
              </a>
              <a href="">
                <img src="/image/apple.svg" alt="Apple Store"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-[12px] justify-between items-center xl:px-[300px] md:px-[50px] mt-[20px] mb-20">
          <p className="text-[#D2D2D5] md:text-[18px] text-[14px] font-Inter">
            Copyright © 2024 Lantern All Rights Reserved.
          </p>
          <p className="text-[#D2D2D5] md:text-[18px] text-[14px] font-Inter">
            Terms & Conditions · Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
