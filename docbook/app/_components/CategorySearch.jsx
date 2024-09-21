"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React,{useEffect,useState} from 'react'
import {Search} from 'lucide-react'
import globalApi from '../_utils/globalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

   const[categoryList, setCategoryList ] = useState([])
   
 useEffect(() => {

  getCategoryList()
  
 },[])
  
  const getCategoryList = () =>{
    globalApi.getCategory().then(
      resp =>{
        
        setCategoryList(resp.data.data);
       
        
      }
    )
  }
  
  return (
    <div className='mb-10 flex flex-col items-center px-5' >

        <h2 className="font-bold text-4xl tracking-wide">Search <span className='text-purple-500'>Doctors</span></h2>
        <h2 className='text-gray-500 text-xl'>Search Your Doctors & Book Appointments in One Click</h2>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
      <Input type="text" placeholder="Search...." />
      <Button type="submit"><Search className='h-4 w-4 mr-2'/>Search</Button>
    </div>

    {/***Display List Of Category */}

    <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
  {categoryList.length > 0 ? (
    categoryList.map((item, index) => index < 6 && (
<Link href={`/search/${item.attributes?.Name}`} key={index} className='flex flex-col text-center gap-2 items-center bg-blue-50 p-5 m-2 hover:scale-110 transition-all ease-in-out'>
        <Image src={item.attributes?.Icon?.data?.attributes?.url} alt='' width={40} height={40} />
        <label className='text-blue-600 text-sm'>{item.attributes?.Name}</label>
      </Link>
    ))
  ) : (
    [1, 2, 3, 4, 5, 6].map((item, index) => (
      <div key={index} className='flex flex-col text-center gap-2 items-center bg-slate-100 p-5 m-2 hover:scale-110 transition-all ease-in-out'>
        <div className='h-20 w-20 bg-slate-200 rounded-lg'></div>
        
      </div>
    ))
  )}
</div>

    
    </div>
  )
}

export default CategorySearch


//siged71997