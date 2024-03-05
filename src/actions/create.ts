'use server'
import prisma from '@/lib/prisma'
import slugify from 'slugify';
import { z } from "zod";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createWork(workTitle: string) {
    const slug = slugify(workTitle);
    const work = await prisma.work.create({
        data: {
            title: workTitle,
            slug: slug,
            updatedAt: new Date(),
        }
    })
    return work.id;
}

export async function uploadWork(image: any, workId: number) {
    await prisma.image.create({
        data: {
            workId: workId,
            fileName: image.fileName,
            src: Buffer.from(image.file.data),
            width: image.width,
            height: image.height,
            pinned: false,
        }
    });
    return true;
}

export const uploadFile = (formData: FormData) => {
    const file = formData.get('file') as File;
    const filename = file.name;

    console.log(filename);
    return(filename)
} 

export async function createPost(formData: FormData) {
  const file = formData.get("mockupImages") as File;
  console.log(file);

  const url = await saveFile(file);

  const { title, description, pathToMoney, mockupImages } = FormSchema.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    pathToMoney: formData.get("pathToMoney"),
    mockupImages: url,
  });
  await prisma.work.create({
    data: {
      title: title,
      slug: description,
      updatedAt: new Date(),
    },
  });
  revalidatePath("/");
  redirect("/");
}
export async function saveFile(formData: FormData) {
  cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  })
  const cloudinaryUpload = [];
  const createdImages = [];
  const files = formData.getAll('file') as File[];
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadPromise: UploadApiResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({}, function (error, result) {
        if (error || result === undefined) {
          reject(error || new Error("Upload result is undefined."));
          return;
        }
        resolve(result);
      }).end(buffer);
    });
    cloudinaryUpload.push(uploadPromise);
  }
  const uploadResults = await Promise.all(cloudinaryUpload);
  for (const uploadResult of uploadResults) {
    const createdImage = await prisma.image.create({
      data: {
        fileName: uploadResult.public_id,
        src: uploadResult.url,
        workId: 1,
        width: uploadResult.width,
        height: uploadResult.height,
      }
    });
    createdImages.push(createdImage);
  }
  return createdImages;
}