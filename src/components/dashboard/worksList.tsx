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
    if(works.length === 0) {
      return (
        <div className="w-full h-full">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestion des Catégorie</h2>
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Ajouter une catégorie</Button>
                </DialogTrigger>
                <Dropzone />
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Ajouter une catégorie</Button>
                </DialogTrigger>
                <Dropzone />
              </Dialog>
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