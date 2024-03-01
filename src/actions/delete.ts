'use server'
import prisma from '@/lib/prisma'

export async function deleteImage(image: any) {
    const deleted = await prisma.image.delete({
        where: {
            id: image.id
        }
    })
    if (!deleted) {
        return false;
    }
    return true;
}