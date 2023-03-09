import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgOne from '../../images/heroImg/imgOne.jpg';


const Home = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='w-11/12 mx-auto my-4'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-2 text-red-600'>About Me</h2>
            <div className="hero-img w-4/5 lg:w-2/5 mx-auto mb-8" data-aos='fade-down' data-aos-duration='1500'>
                
                <img src={imgOne} alt="" />
            </div>

            <div className="hero-info lg:w-3/4 mx-auto text-gray-500" data-aos='fade-down' data-aos-duration='3000'>

                        <p className='text-2xl font-bold mb-2'>MD ATIK HASAN PARVEJ</p>
                <div className='grid grid-cols-1 md:grid-cols-2 font-semibold lg:font-bold'>
                    <div>
                        <p className='mb-2'>Address: Chacksuedpur Boriyahat Sonatola</p>
                        <p className='mb-2'>District: Bogura</p>
                        <p className='mb-2'>Country: Bangladesh</p>
                        <p className='mb-2'>Age: 26 Years</p>
                    </div>
                    <div>
                        <p className='mb-2'>Passion: Student</p>
                        <p className='mb-2'>Mobile: +8801728979659</p>
                        <p className='mb-2'>Mobile: +8801827269942</p>
                        <p className='mb-2'>Email: <a className='text-blue-500' href="ahpmovieexplanation@gmail.com">ahpmovieexplanation@gmail.com</a></p>
                    </div>
                </div>

                {/* <p className='lg:text-2xl'>Hi, I am</p>
                <h2 className='text-xl lg:text-6xl font-bold text-red-600'>MD ATIK HASAN PARVEJ</h2> */}
                <p className='lg:text-xl my-2 lg:my-3 text-justify'>Hi, I am<span className='text-red-600'> MD ATIK HASAN PARVEJ.</span> I am a <span className='font-bold'>Content Creator</span> || <span className='font-bold'>Video Creator</span> || <span className='font-bold'>Photographer</span> || <span className='font-bold'>Creative lover</span> || <span className='font-bold'>Blogger.</span> And I am an electronic/electrical engineer and content creator and video editor basically sharing whatever interests me in the form of videos.</p>
                {/* <p className='lg:text-xl lg:mb-6'>And I am an electronic/electrical engineer and content creator and video editor basically sharing whatever interests me in the form of videos.</p> */}

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