import React, { useEffect } from 'react';
import "./Home.css"
import Video from '../../Assets/Video.mp4'
import { HiLocationMarker } from 'react-icons/hi';
import { ImFilter } from 'react-icons/im';

import AOS from "aos";
import "aos/dist/aos.css";
import Main from '../Main/Main';
const Home = () => {
    //create a reactHook to add scroll
    //animation....
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    
    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src={Video} muted autoPlay loop type="video/mp4"></video>
            <div className='homeContent container'>
                <div className='textDiv'>
                    <span  data-aos="fade-up" className='smallText'>
                        Our packges
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search you Holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor='city'>Search your Destination</label>
                        <div className="input flex">
                            <input type="input" placeholder='enter name' />
                            <HiLocationMarker className='icon' />
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor='date'>Search your date</label>
                        <div className="input flex">
                            <input type="date" placeholder='enter name' />

                        </div>

                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor='price'>Max Price</label>
                            <h3 className='total'> $</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>

                    </div>
                    <div className="searchOption flex">
                        <ImFilter className='icon' />
                    <span>more options</span>
                </div>
                </div>
                

            </div>
          
        </section>
        

    );
};

export default Home;