'use client'

import { cn } from '@/lib/utils';
import { saveFile } from "@/actions/create";
import { getDbImages } from "@/actions/get";
import cldImmage from "@/components/dashboard/cldImage";
import { Button } from "@/components/ui/button"
import { Image as ImageType } from "@prisma/client";
import { useCallback, useEffect, useState } from "react"
import PhotoAlbum from "react-photo-album";
import DropzoneComponent, { useDropzone } from 'react-dropzone'
import { motion } from 'framer-motion'
import Image from "next/image";
import { XIcon } from "lucide-react";
import { Label } from '@/components/ui/label';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input, Progress } from "@nextui-org/react";
import { ScrollArea } from '@/components/ui/scroll-area';

interface Preview {
    file: File;
    preview: string;
}

export default function Page() {
    const [index, setIndex] = useState(-1);
    // images en base
    const [images, setimages] = useState<ImageType[]>([])
    // Preview on Drop
    const [previewImages, setpreviewImages] = useState<Preview[]>([])
    const [status, setstatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [previewIndex, setPreviewIndex] = useState(0)
    const [progress, setprogress] = useState(0)
    useEffect(() => {
        async function fetchImages() {
            const result = await getDbImages();
            setimages(result);
        }
        fetchImages();
    }, [])
    const onValidate = async (previewImages: Preview[]) => {
        const form = new FormData()
        previewImages.forEach(preview => {
            form.append('file', preview.file);
        });
        const updatedImages = await saveFile(form);
        setimages(prevImages => [...prevImages, ...updatedImages]);
    }
    const onAction = async (previewImages: Preview[]) => {
        setstatus('loading');
        for (let index = 0; index < previewImages.length; index++) {
            setPreviewIndex(index);
            const progressPercentage = Math.floor((index + 1) / previewImages.length * 100); // Calculer la progression en pourcentage
            setprogress(progressPercentage);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        setstatus('finish')
    }
    const onCancel = async (time: number) => {
        if(time) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        setpreviewImages([]);
        setstatus('');
        setprogress(0);
    }
    const removeImageAtIndex = (indexToRemove: number) => {
        setpreviewImages(prevImages => prevImages.filter((image, index) => index !== indexToRemove));
    };
    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file: File) => {
          const reader = new FileReader()
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            setpreviewImages((prevPreviewImages: Preview[]) => [...prevPreviewImages, {
                file: file,
                preview: URL.createObjectURL(file),
            }]);
          }
          reader.readAsArrayBuffer(file)
        })
    }, [])
    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Gestion des Catégorie</h2>
                <div className="flex items-center space-x-2">
                    <Dialog>
                        <DialogTrigger asChild>
                        <Button>Ajouter une catégorie</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]"> 
                            <DialogHeader>
                                <DialogTitle>Créer une catégorie</DialogTitle>
                                <DialogDescription>
                                    Créer une catégorie en lui donnant un nom, tu pourras la modifier ultérieurement
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Input type="text" label="Titre" className="" radius={'sm'}/>
                            </div>
                            <DropzoneComponent minSize={0} maxSize={20971520} onDrop={onDrop}>
                                {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections,}) => {
                                    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > 20971520;
                                    return (
                                        <>
                                            <div
                                                {...getRootProps()}
                                                className={cn('w-full min-h-24 h-fit p-5 border border-dashed rounded-lg flex cursor-pointer',
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
                                            {(previewImages.length > 0) ?
                                                <ScrollArea className="mt-2 min-h-0 max-h-48 py-5 border-red-500">
                                                    <div className="mt-2 w-[90%] mx-auto grid grid-cols-3 gap-4 h-fit transition-opacity">
                                                        {previewImages.map((file: any, index: number) => (
                                                            <motion.div
                                                                key={index}
                                                                className="w-full relative flex"
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 260,
                                                                    damping: 20,
                                                                    delay: index / 20
                                                                }}
                                                            >
                                                                <Image
                                                                    src={file.preview}
                                                                    alt={'Preview n°' + index}
                                                                    className='w-full m-auto rounded-sm'
                                                                    width={100}
                                                                    height={100}
                                                                />
                                                                <p className="absolute bottom-0 border-none left-1/2 -translate-x-1/2 text-foreground bg-black text-sm w-full text-center break-words">{file.name}</p>
                                                                <XIcon onClick={() => removeImageAtIndex(index)} className="absolute -top-2 -right-2 rounded-full bg-red-500 cursor-pointer" />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </ScrollArea>
                                            : null}
                                        </>
                                    )
                                }}
                            </DropzoneComponent>
                            <div className="w-full flex justify-between">
                            {(status == 'loading') &&
                                <Button className="w-1/2 h-10 flex" variant={'secondary'}>
                                    <p className="p-2">{progress}%&nbsp;</p>
                                    <Progress
                                        aria-label="Downloading..."
                                        size="sm"
                                        value={progress}
                                        className="w-full p-2"
                                        classNames={{
                                            indicator: "bg-gradient-to-r from-red-500 to-red-700",
                                            label: "tracking-wider font-medium text-default-600",
                                            value: "text-foreground/60",
                                        }}
                                    />
                                </Button>
                            }
                            {(status == 'finish') &&
                                <DialogClose asChild>
                                    <Button onClick={() => onCancel(1)} className="w-1/2">Fini</Button>
                                </DialogClose>   
                            }
                            {!status &&
                                <Button onClick={() => onAction(previewImages)} className="w-1/2">Valider</Button>
                            }
                            <Button onClick={() => onCancel(0)} variant={'secondary'} className="w-1/3">Annuler</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <PhotoAlbum 
                photos={images}
                layout="columns"
                renderPhoto={cldImmage}
                columns={(containerWidth) => {
                    if (containerWidth < 1024) return 2;
                    return 3;
                }} onClick={({index}) => setIndex(index)}
            />
        </div>
    )
}