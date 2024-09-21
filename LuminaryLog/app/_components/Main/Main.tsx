"use client";
import React from 'react'
import Button from '@/Components/Button/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Main = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
      <div className="md:w-1/2 px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Discover,<span className='text-amber-400'> Decide</span>, Share - <br/> Your Blogging <span className='text-amber-600'>Journey</span> Begins Here </h2>
        <p className="text-sm md:text-base mb-4">Discover the power of storytelling and share your own unique voice with the world. With our easy-to-use platform, you can create, publish, and connect with a global audience in just a few clicks.</p>
        <Button text='Read !!' onClick={() => router.push('/Blogs')} />
      </div>
      <div className="md:w-1/2 px-4 py-8">
        <Image src='/main.jpg' alt='Picture' width={800} height={600} />
      </div>
    </div>
  )
}

export default Main;
