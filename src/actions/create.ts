'use server'
import prisma from '@/lib/prisma'
import slugify from 'slugify';

export async function createWork(workTitle: string) {
    const slug = slugify(workTitle);
    const work = await prisma.work.create({
        data: {
            title: workTitle,
            slug: slug,
            updatedAt: new Date(),
        }
    })
    return work.id;
}

export async function uploadWork(image: any, workId: number) {
    console.log(Buffer.from(image.file.data))
    await prisma.image.create({
        data: {
            workId: workId,
            fileName: image.fileName,
            src: Buffer.from(image.file.data),
            width: image.width,
            height: image.height,
            pinned: false,
        }
    });
    return true;
}