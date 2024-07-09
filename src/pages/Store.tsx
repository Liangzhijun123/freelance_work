import React from "react";
import Title from "../Components/Store page/Title.tsx";
import Search from "../Components/Store page/Search.tsx";
import Product from "../Components/Store page/Product.tsx";

const Store: React.FC = () => {
  return (
    <>
      <div id="store">
        <Title />
        <Search />
        <Product />
      </div>
    </>
  );
};

export default Store;
