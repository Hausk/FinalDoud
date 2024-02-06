import { fetchWork } from "@/actions/fetchWork";
import { Button } from "@/components/ui/button";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { notFound } from 'next/navigation'

export default async function Page({ params }: {params: {slug: string}}) {
    const data = await fetchWork(params.slug)
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
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Ajouter de nouvelles photos</DialogTitle>
                            <DialogDescription>
                                Ajoutes les photos que tu veux au format PNG JPG JPEG.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                {data.images.map((image: any) => (
                    <ContextMenu key={image.id}>
                    <ContextMenuTrigger>
                    <div className="overflow-hidden rounded-md w-full">
                        <Image
                            src={image.path}
                            alt={image.id}
                            width={500}
                            height={500}
                            className="w-full object-cover"
                        />
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Épingler</ContextMenuItem>
                      <ContextMenuItem>Supprimer</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                ))}
            </div>
        </>
    )
}