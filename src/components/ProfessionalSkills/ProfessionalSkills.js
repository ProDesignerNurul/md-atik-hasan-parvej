import Aos from 'aos';
import React, { useEffect } from 'react';

const ProfessionalSkills = () => {

    useEffect( () => {
        Aos.init();
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-2 text-red-600'>Professional Skills</h2>
            <div data-aos='fade-down' data-aos-duration='2000' className='flex justify-between items-center border border-gray-400 m-3 p-3 rounded-lg'>
                <h3 className='text-2xl lg:text-4xl font-bold mr-5'>Content Creator</h3>
                <div className="radial-progress" style={{"--value":90}}>90%</div>
            </div>

            <div data-aos='fade-down' data-aos-duration='2000' className='flex justify-between items-center border border-gray-400 m-3 p-3 rounded-lg'>
                <h3 className='text-2xl lg:text-4xl font-bold mr-5'>Video Editor</h3>
                <div className="radial-progress" style={{"--value":75}}>75%</div>
            </div>

            <div data-aos='fade-down' data-aos-duration='2000' className='flex justify-between items-center border border-gray-400 m-3 p-3 rounded-lg'>
                <h3 className='text-2xl lg:text-4xl font-bold mr-5'>Creative Lover</h3>
                <div className="radial-progress" style={{"--value":95}}>95%</div>
            </div>

            <div data-aos='fade-down' data-aos-duration='2000' className='flex justify-between items-center border border-gray-400 m-3 p-3 rounded-lg'>
                <h3 className='text-2xl lg:text-4xl font-bold mr-5'>Any Sub Interests</h3>
                <div className="radial-progress" style={{"--value":50}}>50%</div>
            </div>

        </div>
    );
};

export default ProfessionalSkills;