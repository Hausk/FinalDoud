'use server'
import prisma from '@/lib/prisma'
import { Work } from '@prisma/client';

export async function fetchWorksList() {
    const allWorks: Work[] = await prisma.work.findMany()
    return allWorks;
}

export async function fetchWorkBySlug(slug:string) {
    const workBySlug = await prisma.work.findFirst({
        where: {
            slug: slug,
        },
        include: {
            images: true,
        },
    })
    return workBySlug
}

export async function fetchWorkId(slug:string) {
    const work = await prisma.work.findFirst({
        where: {
            slug: slug,
        }
    })
    return work
}

export async function pinWorkImage(id: number, imagePath: string) {
    const work = await prisma.work.update({
        where: { id: id },
        data: {
            pinnedImage: imagePath
        }
    })
    return work
}