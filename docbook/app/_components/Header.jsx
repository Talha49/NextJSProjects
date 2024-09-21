"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs"


const Header = () => {

   const Menu = [
    {
        id:1, 
        name:'Home',
        path:'/',
    },
    {
        id:2,
        name:'About',
        path:'/about',
    },
    {
        id:3,
        name:'Explore',
        path:'/explore',

    },
    {
        id:4,
        name:'Contact',
        path:'/contact',
    }
   ]

   const {user} = useKindeBrowserClient();
    

  return (
 <div className='flex justify-between p-4 shadow-sm'>
       <div className='flex  items-center gap-10'>
          <Image  src='/logo.svg' width={180} height={80} />


 <ul className='md:flex gap-8 hidden'>
 {
        Menu.map((menu, i) =>(
            <Link href={menu.path} key={i.id} className='hover:text-purple-500 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                {menu.name}
            </Link>
        ))
    }
 </ul>
</div>

{
    user?<LogoutLink><Button variant='outline'>Log Out</Button></LogoutLink>
    :<LoginLink><Button>Get Started</Button></LoginLink>
}


 </div>
    
  )
}

export default Header