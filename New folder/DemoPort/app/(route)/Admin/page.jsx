"use client"
import React, { useState } from 'react'
import AdminHome from '@/app/_adminComp/Home'
import Portfolio from '@/app/_adminComp/Portfolio'
import Blog from '@/app/_adminComp/Blogs'
const Page = () => {

    const [currentSelectTab,setCurrentSelectTab] = useState('Home')

    const menuItems = [
        {
            id : 'Home',
            label: 'Home',
            path: <AdminHome/>
        },
        {
            id : 'Projects',
            label: 'Projects',
            path: <Portfolio/>
        },
        {
            id : 'Blogs',
            label: 'Blogs',
            path: <Blog/>
        }
    ]
    return (
        <div>


 <div className='bg-slate-50 flex gap-10 leading-[80px]'>
    {
        menuItems.map((item)  => (
            <button onClick={() => {setCurrentSelectTab(item.id)}} type='button' key={item.id} className=' list-none '>
            <li>{item.label}</li>
            </button>
        ))
    }
    </div>   

<div>
    {
        menuItems.map(item => item.id ===currentSelectTab && item.path)
    }
    
    </div>         
        </div>
    )
}

export default Page
