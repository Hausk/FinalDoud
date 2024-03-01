'use server'
import prisma from '@/lib/prisma'

export async function pinWorkImage(id: number) {
    try {
        // Récupérer l'image avec l'ID fourni
        const imageToUpdate = await prisma.image.findUnique({
            where: {
                id: id
            }
        });

        if (!imageToUpdate) {
            throw new Error(`Aucune image trouvée avec l'ID ${id}`);
        }
        // Mettre à jour toutes les autres images du même travail pour les dépingler
        await prisma.image.updateMany({
            where: {
                workId: imageToUpdate.workId,
                id: {
                    not: id // Exclure l'image avec l'ID fourni
                }
                },
            data: {
                pinned: false // Dépingler toutes les autres images
            }
        });
        // Mettre à jour l'image spécifique avec pinned: true
        await prisma.image.update({
            where: {
                id: id
            },
            data: {
                pinned: true // Epingler l'image spécifique
            }
        });
        return { success: true, message: 'Toutes les autres images ont été dépinglées avec succès.' };
    } catch (error) {
        console.error('Une erreur est survenue lors de la mise à jour des images :', error);
        return { success: false, message: 'Une erreur est survenue lors de la mise à jour des images.' };
    }
}