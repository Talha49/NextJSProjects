"use client"
import React from 'react'
import globalApi from '../_utils/globalApi'
import Image from 'next/image'
import Link from 'next/link'

const DoctorList = ({doctorList,heading='Popular Doctors'}) => {


  





  return (
    <div className='px-20 py-10'>

      <h2 className='font-bold text-xl mb-5'>{heading}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 '>

        {
         doctorList.length>0 ? doctorList.map((item, index) => (
            <div key={index} className='border-[1px] rounded-lg p-3 hover:border-blue-500 transition-all ease-in-out cursor-pointer hover:shadow-md'>
                <Image  className='h-[200px] w-full  object-cover rounded-lg ' src={item.attributes?.Image?.data?.attributes?.url} alt='' width={500} height={200} />
              
              <div className='mt-3 items-baseline flex flex-col'>
                <h2 className='text-[10px] bg-blue-100 text-purple-400 p-1 rounded-lg px-2'>{item.attributes?.categories?.data[0].attributes.Name}</h2>
                <h2 className='font-bold'>{item.attributes.Name}</h2>
                <h2 className='text-blue-400 text-sm'>{item.attributes?.Year_of_Experience} Years</h2>
                <h2 className='text-sm text-gray-500'>{item.attributes?.Address}</h2>

      <Link className='w-full' href={`/Details/${item?.id}`}> <h2 className='border-[1px] px-3 p-2 rounded-full w-full text-center border-blue-400 text-[11px] mt-2 hover:bg-blue-400 hover:text-white cursor-pointer '>Book Now</h2>
</Link>
              </div>
            </div>
          )) :

          [1,2,3,4,5,6,7,8,9].map((item,index) =>(
            <div  className='h-[220px] bg-slate-200 w-full animate-pulse rounded-lg transition-all ease-in-out'>
                
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorList