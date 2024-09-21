"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import React,{useEffect,useState} from 'react'
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import globalApi from "./_utils/globalApi";

export default function Home() {

  const [doctorList, setDoctorList] = useState([]);


  useEffect(() => {

    getDOctorList()
  },[]);

  const getDOctorList = () => {
    globalApi.getDoctor().then(
      resp => {
        setDoctorList(resp.data.data);
        console.log(resp.data);
      }
    )
  }

  return (
   <main>
    {/****Hero Sections */}
    <Hero />
    {/****Search Bar */}
    <CategorySearch />

    {/*******Popular Doctors */}
    <DoctorList  doctorList={doctorList}/>
   </main>
  );
}
