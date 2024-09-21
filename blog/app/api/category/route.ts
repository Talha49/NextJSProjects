// import prisma from "@/database";
// import { NextRequest, NextResponse } from "next/server";


// export default async function GET(req : NextRequest){
//     try {

//         const {searchParams} = new URL(req.url);
//         const extractCategoryID = searchParams.get('categoryID');

//         const BLOGPOSTCATEGORYDATA = await prisma.pOST.findMany({
//             where:{
//                 category: extractCategoryID || ''
//             }
//         })

//         if(BLOGPOSTCATEGORYDATA.length ){
//             return NextResponse.json({
//                 success: true,
//                 data: BLOGPOSTCATEGORYDATA,
//             })
//         }
        
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({
//             success: false,

//         })
//     }

// }


import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const extractCategoryID = searchParams.get("categoryID");

    const getBlogPostListBasedOnCurrentCategoryID = await prisma.pOST.findMany({
      where: {
        category: extractCategoryID || "",
      },
    });

    if (getBlogPostListBasedOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch data ! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}