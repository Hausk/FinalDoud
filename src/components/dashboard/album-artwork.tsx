'use client'

import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu"

import { Album } from "@/lib/albums"
import { playlists } from "@/lib/playlists"
import { Work } from "@/lib/works"

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  work: Work
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function AlbumArtwork({
  work,
  aspectRatio = "square",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={work.pinnedImage}
          alt={work.title}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 hover:blur-md test-image",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{work.title}</h3>
        <p className="text-xs text-muted-foreground">{work.year}</p>
      </div>
    </div>
  )
}