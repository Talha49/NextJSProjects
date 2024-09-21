import { db,todoTable } from "@/lib/drizzle";
import { NextResponse } from "next/server";


export const GET =  async (request)  => {

    try{
        const res = await db.select().from(todoTable)
        
        console.log(res)

        return NextResponse.json({message : "Success Get" , data: res})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message :  "GET request successfully failed"})
    }
}

export const POST = async(request) => {
    try {
        const { task } = await request.json(); 
        if(task){
            
            const res = await db.insert(todoTable).values({
                task: task, 
            }).returning();
            console.log(res);
            return NextResponse.json({message : "Data added successfully", data: res});
        }
        else{
            throw new Error("Task not found");
        }
    } catch (error) {
        return NextResponse.json({message: "Something is missing"});
    }
}

export const DELETE = async (request) => {
    try {
        // Parse the request body as JSON
        const requestBody = JSON.parse(request.body || '{}');
        
        // Extract the id from the parsed JSON
        const { id } = requestBody;

        // Check if the id is provided
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

        // Respond with success message
        return NextResponse.json({ message: "Delete successful" }, { status: 200 });
    } catch (error) {
        // Handle any errors
        console.error(error);
        return NextResponse.json({ message: "Delete failed. Internal server error" }, { status: 500 });
    }
}

