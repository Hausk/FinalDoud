"use client";
 
import Image from "next/image";
import React from "react";
import { CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
 
export function WorksCard({work}:{work:any}) {
  return (
    <CardContainer className="inter-var relative">
        <Link 
            className="w-full h-full relative"
            href={'/works/' + work.slug}
        >
        <CardItem translateZ="100" className="flex overflow-hidden md:w-fit h-auto max-h-1/2 mt-4 relative">
          <Image
            src={work.pinnedImage}
            height={700}
            width={400}
            className="h-auto w-1/2 md:w-[80%] rounded-xl group-hover/card:shadow-xl m-auto"
            alt="thumbnail"
        />
        </CardItem>
        <CardItem
            translateZ={20}
            className="w-fit text-4xl font-semibold absolute top-0 left-5" as="p">
            {work.title}
        </CardItem>
        <CardItem 
            translateZ={20}
            className="w-fit text-4xl font-semibold absolute bottom-0 right-5" as="p">
            {work.year}
        </CardItem>
        </Link>
    </CardContainer>
  );
}