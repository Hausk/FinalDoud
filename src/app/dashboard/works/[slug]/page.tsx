import { fetchWorkBySlug } from "@/actions/fetchWork";
import ImageAction from "@/components/dashboard/imageAction";
import SlugDropzone from "@/components/dashboard/slugDropzone";
import { Button } from "@/components/ui/button";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { notFound } from 'next/navigation'

export default async function Page({ params }: {params: {slug: string}}) {
    const data = await fetchWorkBySlug(params.slug)
    if (!data) {
        notFound()
    }
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{data.title} {data.year}</h2>
                <div className="flex items-center space-x-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button><PlusIcon className="mr-2"/> Ajouter</Button>
                    </DialogTrigger>
                    <SlugDropzone workId={data.id} />
                </Dialog>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                {data.images.map((image: any) => (
                    <ContextMenu key={image.id}>
                    <ContextMenuTrigger>
                    <div className="overflow-hidden rounded-md w-full">
                        <Image
                            src={image.src}
                            alt={image.id}
                            width={image.width}
                            height={image.height}
                            className="w-full object-cover"
                        />
                        </div>
                    </ContextMenuTrigger>
                    <ImageAction id={data.id} imagePath={image.src}/>
                  </ContextMenu>
                ))}
            </div>
        </>
    )
}