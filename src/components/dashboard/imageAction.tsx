'use client'
import { pinWorkImage } from "@/actions/fetchWork";
import { ContextMenuContent, ContextMenuItem } from "../ui/context-menu";

async function pinImage(id: number, imagePath: string) {
    const res = await pinWorkImage(id, imagePath);
}

export default function ImageAction({ id, imagePath }: { id: number, imagePath: string }) {
    return (
        <ContextMenuContent>
            <ContextMenuItem onClick={() => pinImage(id, imagePath)}>Épingler</ContextMenuItem>
            <ContextMenuItem>Supprimer</ContextMenuItem>
        </ContextMenuContent>
    )
}