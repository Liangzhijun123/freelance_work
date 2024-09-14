import React from "react";
import Title from "./Title.tsx";
import Product from "./Product.tsx";
import Feature from "./Feature.tsx";
import Price from "./Pricing.tsx";

const Home: React.FC = () => {
  return (
    <>
      <div className="" id="home">
        <Title />
        <Product />
        <Feature />
        <Price />
      </div>
    </>
  );
};

export default Home;
