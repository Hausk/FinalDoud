'use client'
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { Star, Trash } from "lucide-react";
import { pinWorkImage, pinnedWorkImage } from "@/actions/fetchWork";
import { useEffect, useState } from "react";
import { deleteImage } from "@/actions/uploadImage";
import { cn } from "@/lib/utils";

async function pinImage(image: any) {
  const pin = await pinWorkImage(image.workId, image.src)
}

async function deleteWorkImage(image: any) {
  // Suppression de l'image de la base de données
  const deleted = await deleteImage(image);
  return deleted;
}

async function isPinned(image: any) {
  const isPinned = await pinnedWorkImage(image);
  return isPinned;
}

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const [pinned, setPinned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageVisible, setImageVisible] = useState(true); // Ajout de l'état de visibilité de l'image

  useEffect(() => {
    async function checkPinnedStatus() {
      const pinnedStatus = await isPinned(photo);
      if (!pinnedStatus) return;
      setPinned(pinnedStatus);
    }
    checkPinnedStatus();
  }, [photo]);

  const handleDeleteClick = async () => {
    setLoading(true);
    const deleted = await deleteWorkImage(photo);
    setLoading(false);

    if (deleted) {
      // Mettre à jour l'état pour cacher l'image si la suppression est réussie
      setImageVisible(false);// Recharger la page après un court délai de 500ms de manière discrète
    }
  };
  return (
    <>
        <div className={cn('overflow-hidden border border-red-500 w-full', imageVisible ? 'block' : 'hidden')} style={{ ...wrapperStyle, position: "relative", display: imageVisible ? 'block' : 'none' }}>
          <div className="w-full flex justify-between absolute top-2 left-0 z-50">
            {!pinned && (
              <button className="bg-red-500 ml-2 p-2 rounded-full" onClick={() => { pinImage(photo) }}>
                <Star size={32} className="" fill={pinned ? "yellow" : "white"} />
              </button>
            )}
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              <button className="bg-red-500 mr-2 p-2 rounded-full" onClick={handleDeleteClick}>
                <Trash size={32} fill="white" />
              </button>
            )}
          </div>
          <Image
            src={photo}
            width={photo.width}
            height={photo.height}
            placeholder={"blurDataURL" in photo ? "blur" : undefined}
            {...{ alt, title, sizes, className, onClick }}
            className="w-full"
          />
        </div>
    </>
  );
}