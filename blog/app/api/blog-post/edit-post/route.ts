// pages/api/blog-post/update-post/[id].ts

import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    try {
        const url = new URL(req.url);
        const extractIDPOst =url.searchParams.get('id')
       
        
        const postData = await request.json();

        // Update post in the database
        const updatedPost = await prisma.pOST.update({
            where: { id: parseInt(id, 10) },
            data: postData,
        });

        if (updatedPost) {
            return NextResponse.json({
                success: true,
                message: 'Post updated successfully',
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to update post',
            });
        }
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
        });
    }
}
