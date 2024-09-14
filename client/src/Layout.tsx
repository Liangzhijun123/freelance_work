import Header from '../src/Components/Nav.tsx';
import Footer from '../src/Components/Footer.tsx';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return ( 
        <>
         <div>
            <Header />
            <Outlet />
            <Footer />
         </div>
        </>
     );
}
 
export default Layout;