import { uploadFile } from "@/actions/uploadImage";
import { Image } from "@prisma/client";
import { now } from "moment";

export const uploadPost = async (selectedFile: File) => {
    const timeStamp = now()
    const { name, width, height } = await getImageDimensions(selectedFile);
    const imageName = `${timeStamp}-${name}`;
    const imagePath = `/images/${timeStamp}-${name}`;

    //Création du fichier
    const data = {
        fileName: imageName,
        src: imagePath,
        workId: 1,
        width: width,
        height: height
    }
    const docRef = await uploadFile(data as Image)
}
const getImageDimensions = async (file: File): Promise<{ name: string, width: number, height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({ name: file.name, width: img.width, height: img.height });
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
};