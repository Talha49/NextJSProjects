"use client"
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react'
const InterScript = Inter({ subsets: ['latin'] });

import { signOut, useSession } from 'next-auth/react';

const StartCalculating = () => {

    const router = useRouter();

    const { status } = useSession();
    
    const logoutHandler = async () => {
      await signOut();
      router.push('/'); // Redirect to the homepage after logout
    }

    return (
        <div className={`bg-[url('/start_investing_bg.jpg')] h-[350px] bg-center bg-cover flex flex-col justify-center items-center ${InterScript.className} `}>
            <p className='bg-gradient-to-r text-[20px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text mb-4 text-[#414141] lg:text-[32px]'>
                TK Finance 
            </p>
            <div className="text-gray-50 sm:text-[28px] text-[20px] font-extrabold leading-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] mt-4">
                <p className='typewriter-text'>
                    Check your Returns today!
                </p>
            </div>

            <div className='flex space-x-2 sm:w-[350px] w-[250px] justify-around mt-10'>
                <p className='w-[150px] text-center rounded-lg bg-white text-[#202020] px-3 py-2 font-semibold select-none' onClick={() => { router.push("/Calculator") }}>Calculator</p>
                
                {/* Logout button */}
                {status === 'authenticated' && (
                    <p className='w-[150px] text-center rounded-lg bg-white text-[#202020] px-3 py-2 font-semibold select-none' onClick={logoutHandler}>Logout</p>
                )}
                 {status === 'unauthenticated' && (
                    <p className='w-[150px] text-center rounded-lg bg-white text-[#202020] px-3 py-2 font-semibold select-none' onClick={() => { router.push("/Login") }}>Login</p>
                )}
            </div>
        </div>
    );
}

export default StartCalculating;
