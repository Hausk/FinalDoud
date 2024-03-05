'use server'
import prisma from '@/lib/prisma'
import { Image } from '@prisma/client';
import { v2 as cloudinary } from "cloudinary";

export async function deleteFile(image: Image) {
    cloudinary.config({
      api_key: process.env.CLOUDINARY_API_KEY ,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    })
    const cloudinaryResult = await cloudinary.uploader.destroy(image.fileName);
    const deleteImage = await prisma.image.delete({
        where: {
            id: image.id
        }
    });
    return deleteImage;
  }