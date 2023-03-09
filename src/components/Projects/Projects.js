import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Projects = () => {
    const [counterOn, setCounterOn] = useState(false);

    useEffect( () => {
        Aos.init();
    }, [])

    return (
        <ScrollTrigger className='w-11/12 mx-auto my-16 lg:my-20' onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-5 text-red-600'>Complete Projects And Awards</h2>
            {counterOn &&
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center'>
                        <div className='border border-gray-300 m-3 p-3 rounded-full shadow-xl'>
                            <p className='text-2xl font-bold'><CountUp start={0} end={150} duration={3} delay={0}></CountUp>+</p>
                            <p className='text-2xl font-semibold'>COMPLETED PROJECTS</p>
                        </div>
                        <div className='border border-gray-300 m-3 p-3 rounded-full shadow-xl'>
                            <p className='text-2xl font-bold'><CountUp start={0} end={20} duration={3} delay={0}></CountUp>+</p>
                            <p className='text-2xl font-semibold'>DESIGN AWARDS</p>
                        </div>
                        <div className='border border-gray-300 m-3 p-3 rounded-full shadow-xl'>
                            <p className='text-2xl font-bold'><CountUp start={0} end={498765} duration={3} delay={0}></CountUp>+</p>
                            <p className='text-2xl font-semibold'>FACEBOOK LIKES</p>
                        </div>
                        <div className='border border-gray-300 m-3 p-3 rounded-full shadow-xl'>
                            <p className='text-2xl font-bold'><CountUp start={0} end={15} duration={3} delay={0}></CountUp>+</p>
                            <p className='text-2xl font-semibold'>CURRENT PROJECTS</p>
                        </div>
                    </div>
                </div>
            }
        </ScrollTrigger>
    );
};

export default Projects;