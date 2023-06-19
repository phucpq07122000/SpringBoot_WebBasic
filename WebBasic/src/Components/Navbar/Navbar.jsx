import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';

const Navbar = ({user}) => {

    const [active, setActive] = useState('navBar')
    // function ToglgleNavBar show
    const showBar = () => {
        setActive('navBar activeNavbar')
    }
    // function closeNavbar 
    const closeBar = () => {
        setActive('navBar')
    }
    const loginCheck = localStorage.getItem("userName");
   
   
    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1>
                            <MdOutlineTravelExplore className='icon' />
                            TravelTour</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            {/* <a href="#" className="navLink">HOME</a> */}
                            <Link to="/Main_Home" className="navLink">Home</Link>
                        </li>
                        <li className="navItem">
                            {/* <a href="" className="navLink">ListUser</a> */}
                            <Link to="/ListUser" className="navLink">List</Link>
                        </li>
                        <li className="navItem">
                            {/* <a href="" className="navLink">Resisgter</a> */}

                        </li>

                        <li className="navItem">
                            {/* <a href="" className="navLink">ListUser</a> */}
                            <Link to="/profile" className="navLink">Profile</Link>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Shop</a>
                        </li>

                        <div>
                            {user ? (
                                <li className="navItem">
                                <a href="" className="navLink">hello</a>
                            </li>
                            ):(
                              
                                <button className="btn">
                                <Link to="/Login" className="navLink">Login</Link>
                            </button>
                            ) }
                        </div>

                    </ul>
                    <div onClick={closeBar} className="closeNavbar">
                        <AiFillCloseSquare className='icon' />
                    </div>
                </div>

                <div onClick={showBar} className="toggleNavbar">
                    <BsFillGrid3X2GapFill className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;