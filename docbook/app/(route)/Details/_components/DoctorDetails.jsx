import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointments from './BookAppointments'


const DoctorDetails = ({doctors}) => {


  console.log(doctors)
  return (
<>

  <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>

      {/**Doctors Image */}
      <div>
           <Image  className='rounded-lg w-full h-[240px] object-contain' src={doctors.attributes?.Image?.data?.attributes?.url} alt='' width={200} height={200} />
        </div>  
        
        {/***doctors info */}

<div className='col-span-2 mt-5 flex flex-col gap-3 items-baseline md:px-10'>
<h2 className='font-bold text-2xl'>{doctors.attributes?.Name}</h2>
<h2 class='flex gap-2 text-gray-500 text-md'><GraduationCap /> <span>{doctors.attributes?.Year_of_Experience} of Experience</span></h2>
<h2 class='flex gap-2 text-gray-500 text-md'><MapPin /> <span>{doctors.attributes?.Address} of Experience</span></h2>
<h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{doctors.attributes?.categories.data[0].attributes?.Name}</h2>

 
<Button><BookAppointments  doctors={doctors}/></Button>
</div>

{/****Book APpointments */}

    
  </div>

{/***About Doctors */}
<div className='p-3 border-[1px] rounded-lg mt-5'>
         <h2 className='font-bold text-[20px]'>About Me</h2>
         <p className='text-gray-500 tracking-wide mt-2'><b>{doctors.attributes?.About[0]?.children[0]?.text} </b>{doctors.attributes?.About[0]?.children[1]?.text}</p> 
         
       </div>
</>  )
}

export default DoctorDetails