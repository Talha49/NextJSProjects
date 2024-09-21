"use client"
import CreateTaskDialog from '@/app/_components/CreateTaskDialog/CreateTaskDialog';
import { fecthTasks } from '@/lib/Features/UserSlice';
import React,{useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TaskComp = () => {
    
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.task.tasks);
    const taskStatus = useSelector((state) => state.task.status);
    const error = useSelector((state) => state.task.error);
    const [saveTask, setsaveTask] = useState()
    
    
     
     
    useEffect(() => {
        if(taskStatus === 'idle'){
            dispatch(fecthTasks())
        }
        
    },[taskStatus] )
    
    useEffect(() => {
        setsaveTask(tasks);
    }, [tasks]);

    
    if (taskStatus === 'loading') {
        return <div>Loading tasks...</div>;
    }

    if (taskStatus === 'failed') {
        return <div>Error: {error}</div>;
    }
    
    
    

    
    
    
    
    
    
    
    return (
        <div className='space-y-9'>
              <div className='flex justify-between items-center p-2'>
                   <h2>All Tasks</h2>
              <div>
                       
                       <CreateTaskDialog/>
                   </div>
              </div>

              <div className='flex gap-2 items-center'>
                <p>Search Tasks :</p>
                <input type='email' className='peer w-64 h-8 bg-transparent outline-none px-4 text-base rounded-xl bg-[#F5BCBA] border border-[#c68684] focus:shadow-md'  /> 
              </div>


              <div className='grid grid-cols-4 gap-x-4 gap-y-4' >
            {saveTask?.map((task) => (
                <div key={task.id} className ='bg-gradient-to-r from-[#F5BCBA] to-[#C3C7FE] border '>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default TaskComp
