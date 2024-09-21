"use client"
import React,{useState} from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoCreateOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { CreateTasks } from '@/lib/Features/UserSlice';


const CreateTaskDialog = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const dispatch = useDispatch()

      const hanldeCreateTask = () => {
     if( title && description) {
        dispatch(CreateTasks({title,description}));
        setTitle('')
        setDescription('')
     }
      } 



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='flex gap-2 items-center'><IoCreateOutline size={25}/> Create</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="title" className="text-left">Title</Label>
                        <Input id="title" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="description" className="text-left">Description</Label>
                        <textarea
                            id="description"
                            placeholder="Enter task description"
                            className="w-full h-24 px-3 py-2 text-base border rounded-lg focus:outline-none focus:shadow-md"
                            value ={description}
                            onChange={(e) => setDescription(e.target.value)}
                        
                        />
                    </div>
                </div>
                <DialogFooter className="">
                    <div className="flex gap-4">
                    <Button variant="outline" onClick={() => { setTitle(''); setDescription(''); }}>Reset</Button>
                    <Button type="submit" onClick={hanldeCreateTask}>Create Task</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateTaskDialog;
