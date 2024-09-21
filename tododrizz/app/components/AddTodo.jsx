"use client"

import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
const AddTodo = () => {

    const [task, setTask] = useState(null);
   console.log("Add Taskk", task)
    const router = useRouter()

  
    const handleSubmit = async(e) => {
        e.preventDefault();
      try {
          if(task) {
              const res = await fetch("http://localhost:3000/api/todos", {
                  method: "POST",
                  body: JSON.stringify({
                      task: task.task
                  }),
              });
              console.log(res.ok);
              if (res.ok) {
                  // Clear the task state after successful submission
                  setTask({ task: '' });
                  // Fetch updated todo list data and update the state
                   router.refresh()   
              }
          }
      } catch (error) {
          console.log(error);
      }
  };
  
  
  return (
    <div className='mb-4'>
        
        <form className='w-full flex justify-center items-center gap-x-3'>
<input  type='text'
 onChange={(e) => setTask({ task: e.target.value })}

className='rounded-full w-full py-3.5 px-5 border focus:outline-secondary'/>
<button type='button' onClick={handleSubmit} className='shrink-0 w-9 h-9 bg-gradient-to-b from-primary to-secondary justify-center p-2 rounded-full flex items-center '>S</button>
        </form>
    </div>
  )
}

export default AddTodo