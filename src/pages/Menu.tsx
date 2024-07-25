import React from "react";
import Title from "../Components/Menu page/Title.tsx";
import Body from "../Components/Menu page/Body.tsx";

const Menu: React.FC = () => {
    return ( 
        <>
          <div id="menu">
            <Title />
            <Body />
          </div>
        </>
     );
}
 
export default Menu;