'use client'

import { saveFile } from "@/actions/create";
import { getDbImages } from "@/actions/get";
import cldImmage from "@/components/dashboard/cldImage";
import { Button } from "@/components/ui/button"
import { Image } from "@prisma/client";
import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone";
import PhotoAlbum from "react-photo-album";

interface Preview {
    file: File;
    preview: string;
}

export default function Page() {
    const [index, setIndex] = useState(-1);
    // images en base
    const [images, setimages] = useState<Image[]>([])
    // Preview on Drop
    const [previewImages, setpreviewImages] = useState<Preview[]>([])
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
    const {getRootProps, getInputProps} = useDropzone({onDrop})
    return (
        <div className="p-4">
            <h1>Upload</h1>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            {previewImages &&
                <div className="grid grid-cols-3 gap-4 w-full">
                {previewImages.map((file: any, index: number) => (
                    <img
                        key={index}
                        src={file.preview}
                    />
                ))}
                </div>
            }
            <PhotoAlbum 
                photos={images}
                layout="columns"
                renderPhoto={cldImmage}
                columns={(containerWidth) => {
                    if (containerWidth < 1024) return 2;
                    return 3;
                }} onClick={({index}) => setIndex(index)}
            />
            <Button onClick={() => onValidate(previewImages)}>Test</Button>
        </div>
    )
}