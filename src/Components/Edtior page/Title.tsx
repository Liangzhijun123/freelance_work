import React from "react";

const Title = () => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto">
        <img
          src="/image/editor.svg"
          alt="image"
          className="w-full xl:h-auto md:h-[400px] hidden md:block object-cover "
        />
        <img
          src="/image/editorem.svg"
          alt="image"
          className="w-full xl:h-auto block md:hidden object-cover object-center"
        />
      </div>
    </>
  );
};

export default Title;
