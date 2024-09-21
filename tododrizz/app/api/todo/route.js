import {NextResponse, NextRequest} from 'next/server'
import { sql } from '@vercel/postgres'
import { db,todoTable } from '@/lib/drizzle'
export const GET = async (request) => {

  



    try {
        await sql`CREATE TABLE IF NOT EXISTS tododrizz(id serial , Task varchar(255))`
        const res = await db.select().from(todoTable)
          
         console.log(res)
         return  NextResponse.json({data : res})
    } catch (error) {
        console.log(error)
        return  NextResponse.json({message :  "GET request successfull"})
    }
return NextResponse.json({message :  "GET request successfull"})

}

export const POST = async(request) => {
    const req = await request.json();
    try {
        
        if(req.task){
            const res = await db.insert(todoTable).values({
                task: req.task,
            }).returning();
            console.log(res);
            return NextResponse.json({message : "DAta Added successfully", data: res});
        }
        else{
            throw new Error("Task not found")
        }
    } catch (error) {
        return NextResponse.json({message: "Something is missing"});
    }

}

export const DELETE = async (request) => {
    try {
        const { id } = JSON.parse(request.body || '{}');

        if (!id) {
            return NextResponse.json({ message: "Delete failed. Please provide a valid ID" }, { status: 400 });
        }

        // Check if the todo with the specified ID exists in the database
        const todo = await db.get(todoTable, { id });

        if (!todo) {
            return NextResponse.json({ message: "Delete failed. Todo ID not found" }, { status: 404 });
        }

        // Delete the todo from the database
        await db.delete(todoTable, { id });

        return NextResponse.json({ message: "Delete successful" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Delete failed. Internal server error" }, { status: 500 });
    }
}
