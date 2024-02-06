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
        <CardItem translateZ="100" className="w-full mt-4 relative">
          <Image
            src={work.pinnedImage}
            height="1000"
            width="1000"
            className="h-full md:w-[80%] object-cover rounded-xl group-hover/card:shadow-xl m-auto"
            alt="thumbnail"
        />
        </CardItem>
        <CardItem
            translateZ={20}
            className="w-fit text-4xl font-semibold absolute top-0 -left-2" as="p">
            {work.title}
        </CardItem>
        <CardItem 
            translateZ={20}
            className="w-fit text-4xl font-semibold absolute bottom-0 -right-2" as="p">
            {work.year}
        </CardItem>
        </Link>
    </CardContainer>
  );
}