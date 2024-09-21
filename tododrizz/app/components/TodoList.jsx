"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [data, setData] = useState([]);
    const [deleteing, setDeleting] = useState(false)
    const res = data.data
    console.log(data.data);

   const router = useRouter()

    useEffect(() => {     
        fetchData();
    }, []);
    const fetchData = async (e) => {
       
        try {
            const res = await fetch("http://localhost:3000/api/todos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.error("Error while fetching data", error);
        }
    };
     
    const Delete = async (id) => {
        setDeleting(true);
        try {
            const res = await fetch("/api/todos", {
                method: "DELETE",
                body: JSON.stringify({ id })
            });
    
            if (!res.ok) {
                const errorMessage = await res.text();
                throw new Error(errorMessage || "Delete failed");
            } else {
                console.log("Todo deleted successfully");
                router.refresh();
            }
        } catch (error) {
            console.log("Error while deleting:", error.message);
        }
        setDeleting(false);
    }
    
    
      
   
    return (
        <>
 <div className='max-h-[360px] overflow-y-auto mb-4 px-2'>
 {Array.isArray(res) && res.map((item, index) => {
    return (
        <div key={index}>
            <div  className='bg-gray-200  py-4 px-4 flex items-center gap-x-3 shadow-md rounded-lg my-3'>
            {/***Circle */}
            <div className='w-3 h-3 rounded-full bg-secondary'></div>
            {/***Task Title */}
            <p className='text-lg font-medium'>{item.task}</p>
              
              <button className='flex justify-end' onClick={()=> Delete(item.id)}>S</button>
        </div>
       
        </div>
    );
})}


 </div>
        </>
    );
};

export default TodoList;
