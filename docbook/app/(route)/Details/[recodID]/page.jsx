"use client"
import globalApi from '@/app/_utils/globalApi';
import React,{useEffect,useState} from 'react'
import DoctorDetails from '../_components/DoctorDetails';

const page = ({params}) => {
  
  const [doctors, setDoctors] = useState([])
useEffect(() => {
  doctorById();
},[])   
   const doctorById = () =>{
    globalApi.getDoctorsByID(params.recodID).then(resp => {
    
    setDoctors(resp.data.data);

    }   
      )
   }
 

  return (
    <div className='p-5 md:px-10'>
    <h2 className='font-bold text-[22px]'>Details</h2>

    <div className='grid grid-cols-1 lg:grid-cols-4 '>
      {/* Doctor Detail  */}
      <div className=' col-span-3'>
      {doctors && <DoctorDetails  doctors={doctors}/>}       
      </div>
      {/* Doctor Suggestion  */}
      <div className= '~'>
    
      </div>
    </div>
  </div>
  )
}

export default page