"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'Blogs',
            path: '/Blogs',
        },
        {
            id: 3,
            name: 'About',
            path: '/about',
        },
        {
            id: 4,
            name: 'Services',
            path: '/Services',
        },
        {
            id: 5,
            name: 'Contact',
            path: '/Contact',
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLargeScreen = () => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) { 
            setIsMenuOpen(false);
        }
    };

    const scrollHeader = () => {
        if (typeof window !== 'undefined' && window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', scrollHeader);
            window.addEventListener('resize', closeMenuOnLargeScreen);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', scrollHeader);
                window.removeEventListener('resize', closeMenuOnLargeScreen);
            }
        };
    }, []);

    return (
        <div className={header ? "fixed z-10 w-[100%] bg-gray-50" : ""}>
            <div className='flex justify-between p-4 shadow-sm'>
                <div className='flex items-center gap-12'>
                    <div className='flex items-center gap-1'>
                        <Image src='/logo.png' alt='logo' width={40} height={40} />
                        <h2 className="font4 text-2xl ">GlitchyDevs</h2>
                    </div>
                    <ul className='md:flex gap-8 hidden'>
                        {Menu.map((menu) => (
                            <li key={menu.id}>
                                <Link href={menu.path}>
                                    <p className='hover:text-purple-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                        {menu.name}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className='opnenav md:hidden absolute top-4 right-9'>
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 '>
                        <div className='w-[90%] max-w-xl bg-white rounded-lg shadow-lg p-8'>
                            <div className="flex justify-between items-center mb-6">
                                <div className='flex items-center gap-1'>
                                    <Image src='/logo.png' alt='logo' width={30} height={30} />
                                    <h2 className="font4 text-lg "></h2>
                                </div>
                                <button className='text-gray-800' onClick={toggleMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul className='mt-8'>
                                {Menu.map((menu) => (
                                    <li onClick={() => setIsMenuOpen(!isMenuOpen)} key={menu.id} className='my-4 border-b-2 w-2/3 pb-2'>
                                        <Link href={menu.path}>
                                            <p className='text-gray-800 relative hover:text-purple-500'>
                                                {menu.name}
                                                <span className="absolute left-0 bottom-0 w-full border-b-2 border-purple-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/Projects" className=' mr-2 bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white px-4 py-2 rounded-lg '>Portfolio</Link>
                        </div>
                    </div>
                )}

                <Link href="/Projects" className='hidden md:block mr-12 bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white px-4 py-2 rounded-lg '>Portfolio</Link>
            </div>
        </div>
    );
};

export default Header;
