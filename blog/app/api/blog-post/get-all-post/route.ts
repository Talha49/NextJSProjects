import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest){
    try {
        
      const getAllBlogPost = await prisma.pOST.findMany();
      if(getAllBlogPost && getAllBlogPost.length ){

        return NextResponse.json({
                 success: true,
                 data: getAllBlogPost,
        })
      }else{
        return NextResponse.json({
            success: false,
            message: "Failed to get"
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