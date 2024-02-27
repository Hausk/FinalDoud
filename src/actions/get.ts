'use server'
import prisma from '@/lib/prisma'
import { Work } from '@prisma/client';

export async function fetchWorksList() {
    const allWorks: Work[] = await prisma.work.findMany({
        include: {
            images: {
                where: {
                    isPinned: true,
                }
            }
        }
    })
    return allWorks;
}
