import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const postId = url.searchParams.get('id');

        if (!postId) {
            return NextResponse.json({
                success: false,
                message: 'Post ID is missing in the request URL.'
            }, { status: 400 });
        }

        const deletedPost = await prisma.pOST.delete({
            where: {
                id: parseInt(postId)
            }
        });

        if (deletedPost) {
            return NextResponse.json({
                success: true,
                message: 'Post deleted successfully.'
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to delete post.'
            });
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error occurred.'
        }, { status: 500 });
    }
}
