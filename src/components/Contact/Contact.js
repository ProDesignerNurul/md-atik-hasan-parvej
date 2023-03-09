import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    useEffect( () => {
        Aos.init();
    }, [])
    return (
        <div className='w-11/12 mx-auto py-10 lg:py-20'>
            <h2 data-aos='fade-up' data-aos-duration='2000' className='text-center text-2xl font-bold border-t-2 border-b-2 p-2 mb-2 text-red-600'>Contact With Me!</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos='fade-down' data-aos-duration='2000' className=" lg:text-left">
                        {/* <h1 className="text-5xl font-bold">Contact Me!</h1> */}
                        <p className="py-3 lg:py-6">Email: <Link className='text-blue-600'>ahpmovieexplanation@mail.com</Link></p>
                        <p className="">Visit My <Link className='text-blue-600' to='https://www.facebook.com/AtikHasanParvej5?mibextid=ZbWKwL' target={'_blank'}>Facebook</Link> </p>
                        <p className="py-3 lg:py-6">Mobile: +8801728989659</p>
                    </div>
                    <div data-aos='fade-down' data-aos-duration='2000' className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Opinion</span>
                                </label>
                                <input type="text" placeholder="Your Opinion" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;