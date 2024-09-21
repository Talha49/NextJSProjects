import {promises as fs} from 'fs'
import path from 'path'
import {v4 as uuidv4} from 'uuid'
import { NextResponse } from 'next/server'


export async function POST(req){
    try{
        const data = await req.json();
        const task={id: uuidv4(), ...data}
        const datadir = path.join(process.cwd(), 'Data')
        const filepath = path.join(datadir, 'tasks.json')

        await fs.mkdir(datadir,{recursive:true});
        let tasks=[];
        try{
         const fileData = await fs.readFile(filepath, 'utf8')
         tasks= JSON.parse(fileData)
        }
        catch(error){
            if (error.code !== 'ENOENT') throw error;
         } 


    tasks.push(task)
    await fs.writeFile(filepath,JSON.stringify(tasks, null,2 ))
    return NextResponse.json({message: 'Task Created Successfully', task},{status: 201})
    }
    catch(error){
        return NextResponse.json({message: 'Failed To create Task',error:error.message}, {status:501} ) 
    }


}