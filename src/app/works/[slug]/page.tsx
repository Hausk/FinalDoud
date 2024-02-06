import { worksList } from "@/lib/works";
import { notFound } from 'next/navigation'
import { PhotoBox } from "@/components/guest/PhotoBox";
import photos from "@/lib/phototest";

export async function fetchWork(slug: string) {
    const res = worksList.find((p) => p.slug === slug)
    if (!res) return undefined
    return res
}
export default async function Page({ params }: {params: {slug: string}}) {
    const data = await fetchWork(params.slug)
    if (!data) {
        notFound()
    }
    return (
        <div className="w-dvh flex">
            <div className="w-[90%] my-20 m-auto">
                <h1 className="mb-10 text-4xl font-semibold">{data.title}&nbsp;-&nbsp;{data.year}</h1>
                <PhotoBox images={photos}/>
            </div>
        </div>
    )
}