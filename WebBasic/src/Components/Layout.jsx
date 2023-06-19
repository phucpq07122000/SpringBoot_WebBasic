import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const user = localStorage.getItem("userName");
    return (
        <div>
            <Navbar user={user}/>
            <Outlet/>
            
        </div>
    );
};

export default Layout;