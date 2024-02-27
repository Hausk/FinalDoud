'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { pinWorkImage } from "@/actions/fetchWork";
import { deleteImage } from "@/actions/uploadImage";
import { Star, Trash } from "lucide-react";

export function PhotoBox({data}: {data: any}) {
  const [pinnedImage, setPinnedImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [imageVisible, setImageVisible] = useState(true); // Ajout de l'état de visibilité de l'image
  const pinImage = async (image: any) => {
    await pinWorkImage(image.workId, image.src);
    setPinnedImage(image);
  };
  const deleteWorkImage = async (image: any) => {
    // Suppression de l'image de la base de données
    const deleted = await deleteImage(image);
    return deleted;
  };

  const handleDeleteClick = async (image: any) => {
    setLoading(true);
    const deleted = await deleteWorkImage(image);
    setLoading(false);
    if (deleted) {
      // Si l'image supprimée est l'image épinglée, la réinitialiser
      if (image === pinnedImage) {
        setPinnedImage(null);
      }
    }
  };
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {data.images.map((image: any, index: number) => (
        <div key={image.id} className={cn("space-y-3", imageVisible ? 'block' : 'hidden')}>
        <div className="overflow-hidden rounded-md relative w-full">
          <div className="w-full flex justify-between absolute top-2 left-0 z-50">
            <button className="bg-red-500 ml-2 p-2 rounded-full" onClick={() => { pinImage(image) }}>
              <Star size={32} className="" fill={image.src == data.pinnedImage ? "yellow" : "white"} />
            </button>
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              <button className="bg-red-500 mr-2 p-2 rounded-full" onClick={() => handleDeleteClick(image)}>
                <Trash size={32} fill="white" />
              </button>
            )}
          </div>
          <Image
            src={`data:image/jpeg;base64,${(image.src)}`}
            alt={image.id}
            width={image.width}
            height={image.height}
            className={"h-auto w-full object-cover aspect-square"}
            loading="eager"
          />
        </div>
        </div>
      ))}
    </div>
    </>
  )
}