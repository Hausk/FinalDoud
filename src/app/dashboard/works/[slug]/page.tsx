import { fetchRelatedImages } from "@/actions/get";
import { PhotoBox } from "@/components/dashboard/PhotoBox";
import SlugDropzone from "@/components/dashboard/slugDropzone";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { notFound } from 'next/navigation'

export default async function Page({ params }: {params: {slug: string}}) {
    const data = await fetchRelatedImages(params.slug)
    if (!data) {
        notFound()
    }
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{data.title}</h2>
                <div className="flex items-center space-x-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button><PlusIcon className="mr-2"/> Ajouter</Button>
                    </DialogTrigger>
                    <SlugDropzone workId={data.id} />
                </Dialog>
                </div>
            </div>
            <PhotoBox data={data}/>
        </>
    )
}