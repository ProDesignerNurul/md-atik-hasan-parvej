import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto sticky left-0 top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <Link className='mb-2' to='/home'>Home</Link>
                            <Link className='mb-2' to='/professionalSkills'>Professional Skills</Link>
                            <Link className='mb-2' to='/services'>Services</Link>
                            <Link className='mb-2' to='/tutorial'>Tutorial</Link>
                            <Link className='mb-2' to='/projects'>Projects</Link>
                            <Link className='mb-2' to='/portfolio'>Portfolio</Link>
                            <Link className='mb-2' to='/about'>About</Link>
                            <Link className='mb-2' to='/contact'>Contact</Link>

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">ATIK HASAN PARVEJ</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <Link className='ml-6' to='/home'>Home</Link>
                        <Link className='ml-6' to='/professionalSkills'>Professional Skills</Link>
                        <Link className='ml-6' to='/services'>Services</Link>
                        <Link className='ml-6' to='/tutorial'>Tutorial</Link>
                        <Link className='ml-6' to='/projects'>Projects</Link>
                        <Link className='ml-6' to='/portfolio'>Portfolio</Link>
                        <Link className='ml-6' to='/about'>About</Link>
                        <Link className='ml-6' to='/contact'>Contact</Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link className="btn">Get started</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;