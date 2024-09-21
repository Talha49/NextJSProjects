import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request : NextRequest){
    try {
        

        const extractPostData = await request.json();
      
        const newlyCreatedPost = await prisma.pOST.create({
            data: extractPostData
        })

        if(newlyCreatedPost){
            return NextResponse.json({
                success: true,
                message:"Successfully created"
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: "Error creating"
            })
        }
    } catch (error) {
        console.log(error);
    
    
     return NextResponse.json({
        success: false,
        message: "Something went wrong!",
     })
    }


}