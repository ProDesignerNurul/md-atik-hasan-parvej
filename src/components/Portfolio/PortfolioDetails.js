import Aos from 'aos';
import React, { useEffect } from 'react';


const PortfolioDetails = ({ portfolio }) => {
    useEffect( () => {
        Aos.init();
    }, [])

    const { portfolioImg } = portfolio;
    return (
        <div className='w-10/12 mx-auto p-5' data-aos='fade-down' data-aos-duration='2000'>
            <img src={portfolioImg} alt="" />
        </div>
    );
};

export default PortfolioDetails;