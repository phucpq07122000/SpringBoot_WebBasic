import React, { useEffect } from 'react';
import "./Main.css"
import useFetchDataProducts from '../../API/porduct';
import { BiCurrentLocation } from 'react-icons/bi';
import { FcViewDetails } from 'react-icons/fc';

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
    const {
        data,
        loading,
    } = useFetchDataProducts();
   
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <section className='main container2 section'>
            <div className="secTitle">
                <h2 className='title'>
                    List Tour
                </h2>
            </div>

            <div  className="secContent grid">
                {
                    data.products?.map(({ id, title, thumbnail, category, description, price }) => {
                        return (
                            // tại sao có <> </> lại chạy ko có thì ko chạy?

                            <div data-aos="fade-up" key={id}>
                                <div className='cardInfo'>
                                    <div className="imgDiv">
                                        <img src={thumbnail} alt={title} />
                                    </div>


                                    <h4 className="desTitle">{title}</h4>
                                    <span className='continent flex'>
                                        <BiCurrentLocation className='icon' />
                                        <span className='name'>{category}</span>
                                    </span>
                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{category}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>${price}</h5>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <div>
                                    <button className="btn flex">
                                        <FcViewDetails className='icon' />
                                        <a href="#">DETAILS</a>
                                    </button>
                                    </div>
                                   
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    );
};

export default Main;