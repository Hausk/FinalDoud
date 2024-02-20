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

export async function uploadWork(images: any, workTitle: string) {
    const slug = workTitle.toLowerCase().replace(/\s+/g, '-');
    const work = await prisma.work.create({
        data: {
            title: workTitle,
            slug: slug,
            updatedAt: new Date(),
            pinnedImage: '',
        }
    })
    images.forEach(async (image: any) => {
        await prisma.image.create({
            data: {
                workId: work.id,
                fileName: image.fileName,
                src: image.src,
                width: image.width,
                height: image.height
            }
        });
    });
}