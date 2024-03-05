'use server'
import prisma from '@/lib/prisma'

export async function fetchWorksList() {
    const allWorks = await prisma.work.findMany({
        include: {
            images: {
                where: {
                    pinned: true,
                }
            }
        }
    })
    if (!allWorks) return [];
     // Convertir src de chaque image en base64
     const worksWithBase64 = allWorks.map(work => {
        let imagesWithBase64;
        if (work.images.length === 0) {
            // Ajouter une image par défaut si aucune image épinglée n'est trouvée
            imagesWithBase64 = [{
                src: '', // Ajoutez ici le chemin de l'image par défaut
                id: -1, // ID factice pour l'image par défaut
                fileName: 'default.jpg', // Nom factice pour l'image par défaut
                createdAt: new Date(), // Date de création factice pour l'image par défaut
                workId: work.id, // ID du travail lié
                width: 0, // Largeur par défaut
                height: 0, // Hauteur par défaut
                pinned: false // Non épinglée par défaut
            }];
        } else {
            imagesWithBase64 = work.images.map(image => ({
                ...image,
                src: image.src.toString('base64'),
            }));
        }

        return {
            ...work,
            images: imagesWithBase64,
        };
    });

    return worksWithBase64;
}

export async function fetchRelatedImages(workSlug: string) {
    const workBySlug = await prisma.work.findFirst({
        where: {
            slug: workSlug,
        },
        include: {
            images: true,
        },
    })
    return workBySlug;
}
export async function fetchWorkBySlug(slug: string) {
    const workBySlug = await prisma.work.findFirst({
        where: {
            slug: slug,
        },
        include: {
            images: true,
        },
    })
    if (!workBySlug) return false;
    // Convertir src de chaque image en base64
    const imagesWithBase64 = workBySlug.images.map(image => ({
        ...image,
        src: image.src.toString('base64'),
    }));
    return {
        ...workBySlug,
        images: imagesWithBase64,
    };
}

export async function getDbImages() {
    const images = await prisma.image.findMany({})
    return images;
}