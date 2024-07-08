import React from "react";
import Title from "../Components/Store page/Title.tsx";
import Search from "../Components/Store page/Search.tsx";

const Store: React.FC = () => {
  return (
    <>
      <div id="store">
        <Title />
        <Search />
      </div>
    </>
  );
};

export default Store;
