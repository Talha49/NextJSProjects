"use client"
import React,{useState,useEffect} from 'react'
import globalApi from '@/app/_utils/globalApi'
import Image from 'next/image'
import {

    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
   
  } from "@/components/ui/command"

  import Link from 'next/link'
import { usePathname } from 'next/navigation'
  
const CategoryList = () => {
    const[categoryList, setCategoryList ] = useState([])

    const path= usePathname();
    const category= path.split('/')[2];
   
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
    <div  className='h-screen fixed mt-5 flex flex-col'>
        <Command>
  <CommandInput  placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      {
        categoryList && categoryList.map((item, index) =>(
            <CommandItem key={index}>
                <Link href={'/search/' + item.attributes?.Name} className={`p-2 flex gap-2
                text-[14px]
                text-blue-600
                items-center
                rounded-md cursor-pointer w-full ${category === item.attributes?.Name && 'bg-blue-100'} `}>

                <Image src={item.attributes?.Icon?.data?.attributes?.url} alt='' width={25} height={25} />

                 <label>{item.attributes?.Name}</label>
                </Link>
            </CommandItem>
        ))
      }
    </CommandGroup>
    
  </CommandList>
</Command>

    </div>
  )
}

export default CategoryList