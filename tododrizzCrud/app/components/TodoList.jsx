"use client"
import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [data, setData] = useState([]);
    const res = data.data
    console.log(data.data);


    useEffect(() => {     
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/todo", {
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
     

   
    return (
        <>
 <div className='max-h-[360px] overflow-y-auto mb-4 px-2'>
 {Array.isArray(res) && res.map((item, index) => {
    return (
        <div key={index} className='bg-gray-200  py-4 px-4 flex items-center gap-x-3 shadow-md rounded-lg my-3'>
            {/***Circle */}
            <div className='w-3 h-3 rounded-full bg-secondary'></div>
            {/***Task Title */}
            <p className='text-lg font-medium'>{item.task}</p>
           
        </div>
    );
})}


 </div>
        </>
    );
};

export default TodoList;
