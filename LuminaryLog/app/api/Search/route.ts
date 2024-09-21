import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
    try {
        
        const url = new URL(req.url);
        const extractQueryString =url.searchParams.get('query')

        const searchPostList = await prisma.pOST.findMany({
            where:{
                OR:[
                    {
                        title:{
                            contains: extractQueryString || ''
                        },
                    },
                    {
                        description:{
                            contains: extractQueryString || ''
                        },
                    }
                ]
            }
        })

        if(searchPostList){
          return  NextResponse.json({
                success: true,
                data: searchPostList
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: "Failed "
             })
        
        }
    } catch (error) {
         console.log(error)
         return NextResponse.json({
            success: false,
            message: "Failed "
         })
    }
}