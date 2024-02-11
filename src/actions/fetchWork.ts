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