import Aos from 'aos';
import React, { useEffect } from 'react';

const Tutorial = () => {

    useEffect( () => {
        Aos.init();
    }, [])

    return (
        <div className='w-11/12 mx-auto my-20 overflow-x-hidden'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-5 text-red-600'>Tutorial Video</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/eZh5BeAZ9Hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/VQeVAJnhD5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/77l7ExxT6H0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/0O9ykiGrp28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/Tg7N7u0BV-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe data-aos='fade-down' data-aos-duration='2000' className='w-full p-5' src="https://www.youtube.com/embed/5aeYvyJ8VfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Tutorial;