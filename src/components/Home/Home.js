import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgOne from '../../images/heroImg/imgOne.jpg';
import imgTow from '../../images/heroImg/imgTow.jpg';
import imgThree from '../../images/heroImg/imgThree.jpg';
import imgFour from '../../images/heroImg/imgFour.jpg';


const Home = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='w-11/12 mx-auto my-8'>

            <div className="hero-img lg:w-60 mx-auto mb-8" data-aos='fade-down' data-aos-duration='1500'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={imgOne} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={imgTow} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={imgThree} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={imgFour} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-info lg:w-3/4 mx-auto lg:text-center" data-aos='fade-down' data-aos-duration='3000'>
                <p className='lg:text-2xl'>Hi, I am</p>
                <h2 className='text-xl lg:text-6xl font-bold text-red-600'>MD ATIK HASAN PARVEJ</h2>
                <p className='lg:text-2xl lg:mb-6'>I am a Content Creator, Video Creator, Photographer, creative lover And Blogger</p>
                <div>
                    <button className='btn btn-circle btn-outline mt-2 lg:mt-3'><Link to='https://www.facebook.com/AtikHasanParvej5' target={'_blank'}><FaFacebook></FaFacebook></Link></button>
                    <button className='btn btn-circle btn-outline ml-4 mt-2 lg:mt-3'><Link to='https://twitter.com/AtikHasanP?t=RmDIYgUCGC-GPR8_qSpOsw&s=09' target={'_blank'}><FaTwitter></FaTwitter></Link></button>
                    <button className='btn btn-circle btn-outline ml-4 mt-2 lg:mt-3'><Link to='https://www.instagram.com/atik_hasan_parvej/' target={'_blank'}><FaInstagram></FaInstagram></Link></button>
                    <button className='btn btn-circle btn-outline ml-4 mt-2 lg:mt-3'><Link to='https://www.linkedin.com/in/atik-hasan-parvej-bb9b55242/' target={'_blank'}><FaLinkedin></FaLinkedin></Link></button>
                    <button className='btn btn-circle btn-outline ml-4 mt-2 lg:mt-3'><Link to='https://www.tiktok.com/@atikhasanparvej?_t=8ZxD74hO0x8&_r=1' target={'_blank'}><FaTiktok></FaTiktok></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;