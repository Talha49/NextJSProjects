import CategoryList from '@/app/_components/CategoryList/Category';
import React from 'react'

async function getAllListsByCategory(getId: string) {
    const res = await fetch(`${process.env.URL}/api/category?categoryID=${getId}`, {
      method: "GET",
      cache: "no-store",
    });
  
    const data = await res.json();
  
    if (data.success) return data.data;
  }
const page = async ({params}: {params : any}) => {
 
  const {id} = params;
  const getAllList = await getAllListsByCategory(id);
 
    return (
    <div><CategoryList list={getAllList}/></div>
  )
}

export default page