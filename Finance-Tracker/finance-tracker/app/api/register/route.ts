import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db as prisma } from "@/lib/db";



export async function POST(request : Request){

    try {
        
        const body = await request.json();
        const {email, password, name} = body;
        const hashedPassword = await bcrypt.hash(password,12)
        const user = await prisma.user.create({data: {email: email, password: hashedPassword}})

        return NextResponse.json({success: true, data:user})
    } catch (error) {
        return NextResponse.json({success: false, message: error, route: "Register" })   
    }
}