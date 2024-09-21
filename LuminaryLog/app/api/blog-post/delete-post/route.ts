import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req : NextRequest){
    try {
         
        const url = new URL(req.url);
        const extractIDPOst =url.searchParams.get('id')

        const DeleteFunctionWithId = await prisma.pOST.delete({
            where:{
                id: Number(extractIDPOst)
            }
        })

        if(DeleteFunctionWithId){
            return NextResponse.json({
                success: true,
                message: 'Successfully deleted',
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message:"Failed to delete!"
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