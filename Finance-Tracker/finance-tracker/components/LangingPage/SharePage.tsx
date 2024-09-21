import React from 'react'
import { PiShareNetwork } from "react-icons/pi"
import { GiGiftOfKnowledge } from "react-icons/gi"
import { HiOutlineInformationCircle } from "react-icons/hi"

const SharePage = () => {
  return (
    <div className='mt-16'>
     <div className='mb-4 px-4 text-center text-[28px] font-extrabold leading-8 text-gray-900 md:text-[33px] md:leading-[35px] '>Save/Share Your <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#E23A3A] to-[#E58A00]'>Results</span></div>
   <div className='mx-auto max-w-2xl px-4 text-center text-[16px] leading-6 text-gray-900 md:text-[20px] md:leading-8 '>Save or share your calculated results for informed financial decisions</div>

  <div className='flex justify-center mt-10'>
     <div className='flex flex-wrap justify-center sm:justify-around lg:w-10/12 xl:w-11/12'>
      {/**Card 1 */}
      <div className='relative border-2 z-10 flex transform-gpu flex-col cursor-pointer rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
        <p className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E23A3A]'><PiShareNetwork size={80} /></p>
        <h2 className='tracking-tight my-3 text-lg font-semibold  leading-6 text-gray-800'>Share Your Financial Success</h2>
        <h3 className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500 '>We believe in celebrating your financial milestones. Share your calculated results with your friends and family to showcase your wise investment decisions.</h3>
      </div>
       {/**Card 2 */}
       <div className='relative border-2 z-10 flex transform-gpu flex-col cursor-pointer rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
        <p className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E23A3A]'><GiGiftOfKnowledge size={80} /></p>
        <h2 className='tracking-tight my-3 text-lg font-semibold  leading-6 text-gray-800'>Share Your Financial Success</h2>
        <h3 className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500 '>We believe in celebrating your financial milestones. Share your calculated results with your friends and family to showcase your wise investment decisions.</h3>
      </div>
       {/**Card 3 */}
       <div className='relative border-2 z-10 flex transform-gpu flex-col cursor-pointer rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]'>
        <p className='h-[150px] w-full rounded object-cover flex justify-center items-center text-[#E23A3A]'><HiOutlineInformationCircle size={80} /></p>
        <h2 className='tracking-tight my-3 text-lg font-semibold  leading-6 text-gray-800'>Share Your Financial Success</h2>
        <h3 className='blue-link mb-5 text-base font-normal leading-[22px] text-gray-500 '>We believe in celebrating your financial milestones. Share your calculated results with your friends and family to showcase your wise investment decisions.</h3>
      </div>
     </div>
  </div>

    </div>

  )
}

export default SharePage