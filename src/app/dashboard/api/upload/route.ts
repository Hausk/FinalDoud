import { existsSync, mkdir } from "fs";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const imagePath: string = data.get('imagePath') as string; // Récupérer le chemin de l'image
    console.log(imagePath);

    if (!file) {
        return NextResponse.json({ success: false });
    }

    try {
        const imagesFolderPath = join(process.cwd(), 'public', 'images');
        if (!existsSync(imagesFolderPath)) {
            // Créer le dossier 'images' s'il n'existe pas déjà
            mkdir(imagesFolderPath, (err) => {
                if (err) {
                    console.error('Erreur lors de la création du dossier :', err);
                    return;
                }
                console.log('Dossier créé avec succès.');
            });
        }
        // Lecture du contenu du fichier
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Construction du chemin de destination dans le dossier public
        const publicPath = join(process.cwd(), 'public', imagePath); // Utiliser le chemin de l'image passé en paramètre

        // Écriture du fichier dans le dossier public
        await writeFile(publicPath, buffer);

        // URL publique du fichier
        const publicUrl = imagePath;

        console.log(`Fichier enregistré avec succès : ${publicUrl}`);

        // Réponse avec le nom du fichier et l'URL publique
        return NextResponse.json({ success: true, fileName: imagePath, url: publicUrl });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du fichier :', error);
        return NextResponse.json({ success: false, error: 'Erreur lors de l\'enregistrement du fichier.' });
    }
}