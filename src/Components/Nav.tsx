import React, { useState } from "react";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden xl:flex md:flex bg-[#08050F] h-[96px] w-full items-center justify-between xl:px-[300px] md:px-[100px] p-[24px] drop-shadow-xl shadow-[#7A16E6]">
        {/* Left section */}
        <div className="flex gap-[10px]">
          <p className="text-white font-Sora text-[32px] font-bold">Lantern</p>
        </div>

        {/* Navigation links */}
        <div className="flex xl:gap-[50px] md:gap-[25px]">
          <a
            href="#home"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Home
          </a>
          <a
            href="#editor"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Editor
          </a>
          <a
            href="#menu"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Menu
          </a>
          <a
            href="#store"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Store
          </a>
        </div>

        {/* Right section */}
        <div className="flex gap-[20px]">
          <a
            href="#signin"
            className="relative text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[128px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="relative text-[#F9C80E] font-Inter text-[18px] border border-[#F9C80E] rounded-[8px] p-2 w-[128px] transition-colors duration-300 hover:bg-[#F9C80E] hover:text-black"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex flex-row justify-between items-center px-[16px] py-[12px]">
        {/* Lantern text */}
        <p className="text-white font-Sora text-[24px] font-bold">Lantern</p>
        
        {/* Hamburger icon */}
        <button onClick={toggleMobileMenu} className="ml-auto">
          <img src="/image/hamburger.svg" alt="menu" className="cursor-pointer" />
        </button>
      </div>

      {/* Dropdown menu */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col absolute right-0 w-[40%] bg-[#08050F] p-[16px] z-30">
          <a
            href="#home"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Home
          </a>
          <a
            href="#editor"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Editor
          </a>
          <a
            href="#menu"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Menu
          </a>
          <a
            href="#store"
            className="text-[#D2D2D5] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Store
          </a>
          <a
            href="#signin"
            className="text-[#F9C80E] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E] mb-[8px]"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="text-[#F9C80E] font-Inter text-[18px] hover:text-white border:hidden hover:border-b border-b-[#F9C80E]"
          >
            Register
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
