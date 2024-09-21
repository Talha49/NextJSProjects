import { db,todoTable } from "@/lib/drizzle";
import { NextResponse } from "next/server";

export const PUT = async (request) => {
    try {
        const requestBody = JSON.parse(request.body || '{}'); 
        const { id, task } = requestBody;

        if (request.method === "PUT" && id && task) { 
           
            const updatedData = await db.update(todoTable, { task }).where({ id }).returning(); 
            return NextResponse.json({ message: "Update successful", data: updatedData }, { status: 200 }); 
        } else {
            return NextResponse.json({ message: "Update failed. Please provide a valid ID and task" }, { status: 400 }); 
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Update failed. Internal server error" }, { status: 500 }); 
    }
}


export  const GET = async() => {}