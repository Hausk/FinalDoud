import Link from "next/link";
import { Button } from "../ui/button";
import { AlbumArtwork } from "./album-artwork";
import { Work } from "@prisma/client";
import { fetchWorksList } from "@/actions/fetchWork";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Dropzone from "./dropzone";

export default async function WorksList() {
    const works = await fetchWorksList()
    if(works) {
        return (
        <div className="w-full h-full">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestion des Catégorie</h2>
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Ajouter une catégorie</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Créer une catégorie</DialogTitle>
                    <DialogDescription>
                      Créer une catégorie en lui donnant un nom, tu pourras la modifier ultérieurement
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Titre
                      </Label>
                      <Input
                        id="title"
                        defaultValue="Titre de la catégorie"
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
                    <div className="w-full">
                      <Dropzone />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Sauvegarder</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="h-full w-full flex">
            <p className="m-auto">Aucune catégorie</p>
          </div>
        </div> 
        )
    }
    return (
        <>
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestion des Catégorie</h2>
            <div className="flex items-center space-x-2">
              <Button>Ajouter une catégorie</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work: any) => (
              <Link key={work.id} href={'/dashboard/works/' + work.slug}>
                <AlbumArtwork
                  work={work}
                  className="w-full"
                  aspectRatio="square"
                  width={2000}
                  height={2000}
                />
              </Link>
          ))}
          </div>
      </>
    )
  }