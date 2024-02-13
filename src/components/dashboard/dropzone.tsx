'use client'
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import DropzoneComponent, { useDropzone } from 'react-dropzone'
import { now } from 'moment';
import { uploadFile } from '@/actions/uploadImage';
import { Image as Img } from '@prisma/client';

export default function Dropzone() {
    const [loading, setLoading] = useState(false)
    const [files, setFiles] = useState<Array<File & { preview: string }>>([]);
    const [test, setTest] = useState([]) as any;
    const maxSize = 20971520;

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );

            acceptedFiles.forEach(async (file) => {
                await uploadPost(file);
            });
        },
        maxSize: maxSize
    });

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onabort = () => console.log("Lecture du fichier annulé");
            reader.onerror = () => console.log("Erreur de lecture du fichié");
            reader.onload = async () => {
                //await uploadPost(file);
                setTest((prevTest: any) => [...prevTest, ...acceptedFiles]);
            }
            reader.readAsArrayBuffer(file);
        });
    };

    const uploadPost = async (selectedFile: File) => {
        if(loading) return;
        const timeStamp = now()
        const { name, width, height } = await getImageDimensions(selectedFile);
        const imageName = `${timeStamp}-${name}`;
        const imagePath = `/images/${timeStamp}-${name}`;

        // Collection de l'image
        const data = {
            fileName: imageName,
            src: imagePath,
            workId: 1,
            width: width,
            height: height
        }
        try {
            const form = new FormData();
            form.append('file', selectedFile);
            form.append('imagePath', imagePath);
            const res = await fetch('/dashboard/api/upload', {
                method: 'POST',
                body: form,
            })
            if(!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            console.error(e)
        }
        // Server action prisma pour creer
        const docRef = await uploadFile(data as Img)
        setLoading(true);
    }

    return (
        <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
            {({getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject, fileRejections,}) => {
                const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
                return (
                    <>
                        <div
                            {...getRootProps()}
                            className={cn('w-full min-h-24 h-fit p-5 border border-dashed rounded-lg flex',
                                isDragActive
                                    ? "bg-blue-600 text-white animate-pulse"
                                    : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
                            )}
                        >
                            <input {...getInputProps()} />
                            <p className="m-auto text-pretty">
                                {!isDragActive && 'Glissez / déposez une image ici ou cliquez pour selectionner des images'}
                                {isDragActive && !isDragReject && 'Dépose pour importer'}
                                {isDragReject && 'File type not accepted'}
                                {isFileTooLarge && (
                                    <span className='text-orange-500 mt-2'>Image trop volumineuse</span>
                                )}
                            </p>
                        </div>
                        <div className="flex flex-row flex-wrap h-fit">
                            {test.map((file: any, index: number) => (
                                <div key={index} className="m-auto">
                                    <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100px' }} />
                                    <p>{file.name}</p>
                                </div>
                            ))}
                        </div>
                        </>
                )
            }}
        </DropzoneComponent>
    )
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