import React from 'react';
import Navbar from '../View/Admin_tamplate/Navbar/Navbar';
import Footer from '../View/Admin_tamplate/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;