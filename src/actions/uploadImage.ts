'use server'
import prisma from '@/lib/prisma'
import { Image } from '@prisma/client';

export async function uploadFile(data: Image) {
    await prisma.image.create({
        data: {
            fileName: data.fileName,
            src: data.src,
            workId: data.workId,
            width: data.width,
            height: data.height
        }
    });
    return { success: true };
}