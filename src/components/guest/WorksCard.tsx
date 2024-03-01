"use client";
 
import Image from "next/image";
import React from "react";
import { CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
 
export function WorksCard({work}:{work: any}) {
  return (
    <CardContainer className="inter-var relative">
        <Link 
            className="w-full h-[50%] relative"
            href={'/works/' + work.slug}
        >
        <CardItem translateZ="100" className="flex overflow-hidden md:w-fit h-fit max-h-[75vh] max-w-[75vh] rounded-md mt-4 relative">
          <Image
            src={`data:image/jpeg;base64,${(work.images[0].src)}` ?? ''}
            height={1000}
            width={1000}
            className="h-auto w-full object-cover aspect-square rounded-xl group-hover/card:shadow-xl m-auto"
            alt="thumbnail"
        />
        </CardItem>
        <CardItem
            translateZ={20}
            className="w-fit text-4xl font-semibold m-auto pt-2" as="p">
            {work.title}
        </CardItem>
        </Link>
    </CardContainer>
  );
}