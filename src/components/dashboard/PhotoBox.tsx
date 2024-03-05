'use client'
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { pinWorkImage } from "@/actions/update";
import { deleteFile } from "@/actions/delete";
import { Star, Trash } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Image } from "@prisma/client";

export function PhotoBox({data}: {data: any}) {
  const [pinnedImage, setPinnedImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [imageVisible, setImageVisible] = useState(true); // Ajout de l'état de visibilité de l'image
  const pinImage = async (image: any) => {
    await pinWorkImage(image.id);
    setPinnedImage(image);
  };
  const deleteWorkImage = async (image: any) => {
    // Suppression de l'image de la base de données
    const deleted = await deleteFile(image);
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
  const onDelete = async (image: Image) => {
    const deleteAction = await deleteFile(image);
  } 
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {data.images.map((image: any) => (
        <div key={image.id} className={cn("space-y-3", imageVisible ? 'block' : 'hidden')}>
        <div className="overflow-hidden rounded-md relative w-full">
          <div className="absolute right-2 top-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Action</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => onDelete(image)}>
                <Trash className="mr-2 h-4 w-4 text-red-500" />
                <span className="text-red-500">Supprimer</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                <span>Épingler</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <CldImage
            src={image.src}
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