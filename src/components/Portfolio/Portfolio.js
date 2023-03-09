import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioDetails from './PortfolioDetails';
import Aos from 'aos';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('portfolioData.json')
            .then(res => res.json())
            .then(data => setPortfolios(data))
    }, []);

    useEffect(() => {
        Aos.init();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div className='w-11/12 mx-auto my-10 lg:my-28 overflow-x-hidden'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-5 text-red-600'>My Portfolio</h2>
            <div >
                <Slider {...settings}>
                    {
                        portfolios?.map(portfolio => <PortfolioDetails
                            key={portfolio._id}
                            portfolio={portfolio}
                        ></PortfolioDetails>)
                    }
                </Slider>
            </div>



        </div>
    );
};

export default Portfolio;