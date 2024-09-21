"use client"
import React,{useState} from 'react'
import Technologies from '../Technologies/Technologies'

const Skills = () => {

   
    return (
        <div>
        
              <div className='px-20 py-10'>
              <div className="relative">
  <h2 className="text-3xl font-bold text-gray-900 relative z-10">
    <span className="relative inline-block pb-2 scale-in">
      Technologies
    </span>
  </h2>
  <div className="absolute bottom-0 left-4 scale-in w-[137px] h-1  bg-gray-900"></div>
  
</div>


<div>
   
    <div className='  grid lg:grid-cols-3 mt-8 md:grid-cols-2 grid-cols-1 place-content-around place-items-center md:gap-0 gap-6  '>
    <div class="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
  <div class="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
    <span class="text-5xl font-bold">Jr</span>
    <p class="text-amber-300 font-thin">- JamStack Developer -</p>
  </div>
</div>

<div class="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
  <div class="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
    <span class="text-5xl font-bold">Jr</span>
    <p class="text-amber-300 font-thin">- Shopify Developer -</p>
  </div>
</div>
<div class="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
  <div class="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
    <span class="text-5xl font-bold">Jr</span>
    <p class="text-amber-300 font-thin">- WorPress Developer -</p>
  </div>
</div>
    </div>
</div>
              </div>
            <div>
                <Technologies />
            </div>
        </div>
    )
}

export default Skills
