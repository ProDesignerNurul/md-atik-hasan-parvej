import Aos from 'aos';
import React, { useEffect } from 'react';

const Services = () => {

    useEffect( () => {
        Aos.init();
    }, [])

    return (
        <div className='w-11/12 mx-auto my-5 overflow-x-hidden'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-2 text-red-600'>My Services</h2>
            <div className="md:w-3/4 mx-auto">
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>AWESOME FEATURES</h2>
                    <p>Whether I am a new client or an old client, I give 12 hours for any matter</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>ANIMATED ELEMENTS</h2>
                    <p>Cline does not carry any content that I make myself while working</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>RESPONSIVE DESIGN</h2>
                    <p>I think of myself as a customer and work very hard and carefully</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>MODERN DESIGN</h2>
                    <p>There is no smile of hatred, the words of life are pure, the course of the valley is right</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>RETINA READY</h2>
                    <p>Protect your eyes Always move downwards If you see something bad, remove your eyes</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='2000' className='my-4 border-b-2'>
                    <h2 className='font-bold text-xl'>FAST SUPPORT</h2>
                    <p>24 hours of the day and night are answered at any time. Come to Facebook to know the details of any question</p>
                </div>
            </div>
        </div>
    );
};

export default Services;