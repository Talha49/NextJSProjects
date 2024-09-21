"use client"
import DoctorList from '@/app/_components/DoctorList'
import globalApi from '@/app/_utils/globalApi'
import React,{useEffect,useState} from 'react'

const page = ({params}) => {
  
  const [doctorList, setDoctorList] = useState([])

   
 useEffect(() =>(

    
    getDoctors()
  
     
 ),[])


 const getDoctors = () =>{
 
  globalApi.getDoctorByName(params.cname).then(resp => {
    console.log(resp)
    setDoctorList(resp.data.data)
  })

 }

  return (

    
    <div>

      <DoctorList doctorList={doctorList} heading={params.cname}/>
    </div>
  )
}

export default page