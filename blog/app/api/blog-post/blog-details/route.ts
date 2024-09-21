import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const blogID = url.searchParams.get('blogID');

    if (!blogID) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is missing",
      });
    }

    const getBlogwithId = await prisma.pOST.findUnique({
      where: {
        id: Number(blogID)
      }
    });

    if (getBlogwithId) {
      return NextResponse.json({
        success: true,
        data: getBlogwithId,
        message: 'Successfully retrieved',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog not found"
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
