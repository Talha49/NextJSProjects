import prisma from "@/database";
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    const getAllBlogPosts = await prisma.pOST.findMany();

    if (getAllBlogPosts && getAllBlogPosts.length) {
      return NextResponse.json({
        success: true,
        data: getAllBlogPosts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch blog posts. Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}