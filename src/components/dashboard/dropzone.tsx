'use client'
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import DropzoneComponent, { useDropzone } from 'react-dropzone'
import { now } from 'moment';
import { uploadFile } from '@/actions/uploadImage';
import { Image as Img } from '@prisma/client';
import { motion } from 'framer-motion'
import { XIcon } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '../ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { getImageSize } from 'next/dist/server/image-optimizer'; 

export default function Dropzone() {
    const [loading, setLoading] = useState(false)
    const [files, setFiles] = useState<Array<File & { preview: string }>>([]);
    const [preview, setPreview] = useState([]) as any;
    const [filing, setFiling] = useState([]) as any;
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
                setPreview((prevPreview: any) => [...prevPreview, ...[file]]);
            }
            reader.readAsArrayBuffer(file);
        });
    };
    const onValidate = async () => {
        await uploadPost(preview);
    }

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
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Créer une catégorie</DialogTitle>
                <DialogDescription>
                    Créer une catégorie en lui donnant un nom, tu pourras la modifier ultérieurement
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Titre
                    </Label>
                    <Input
                        id="title"
                        defaultValue="Titre de la catégorie"
                        className="col-span-3"
                    />
                </div>
            </div>
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
                            <ScrollArea className="mt-2 min-h-0 max-h-48 py-5">
                                <div className="mt-2 w-[90%] mx-auto grid grid-cols-3 gap-4 h-fit transition-opacity">
                                    {preview.map((file: any, index: number) => (
                                        <motion.div
                                            key={index}
                                            className="w-full relative flex"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: index / 10
                                            }}
                                        >
                                            <img
                                                src={URL.createObjectURL(file)}
                                                alt={file.name}
                                                className='w-full m-auto rounded-sm'
                                                width={100}
                                                height={100}
                                            />
                                            <p className="absolute bottom-0 border-none left-1/2 -translate-x-1/2 text-foreground bg-black text-sm w-full text-center break-words">{file.name}</p>
                                            <XIcon className="absolute -top-2 -right-2 rounded-full bg-red-500"/>
                                        </motion.div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </>
                    )
                }}
            </DropzoneComponent>
            <DialogFooter>
                <Button type="submit" onClick={onValidate}>Sauvegarder</Button>
            </DialogFooter>
        </DialogContent>
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