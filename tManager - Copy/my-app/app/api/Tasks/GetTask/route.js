import {promises as fs} from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET(req){
 
try{
   const datadir = path.join(process.cwd(), 'Data');
   const filepath = path.join(datadir,'tasks.json');


   const fileData = await fs.readFile(filepath,'utf8');
   const tasks = JSON.parse(fileData)

   return NextResponse.json(tasks,{status:200})
}
catch(error){
 return NextResponse.json({message: "Error while Getting Tasks", error: error.message }, {status:500})
}

}