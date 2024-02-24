import { notFound } from 'next/navigation'
import { PhotoBox } from "@/components/guest/PhotoBox";
import photos from "@/lib/phototest";
import { fetchWorkBySlug } from "@/actions/fetchWork";
import { NavBar } from '@/components/guest/NavBar';

export default async function Page({ params }: {params: {slug: string}}) {
    const data = await fetchWorkBySlug(params.slug)
    if (!data) {
        notFound()
    }
    return (
        <>
            <NavBar />
            <div className="w-screen min-h-dvh flex bg-gradient-to-tr from-slate-900 via-black to-violet-950 overflow-x-hidden">
                <div className="w-[90%] my-20 m-auto break-all">
                    <div className="mb-10 text-4xl font-semibold w-full flex">
                        <h2 className="w-fit uppercasebreak-all text-balance">{data.title}</h2>
                    </div>
                    <PhotoBox images={data.images}/>
                </div>
            </div>
        </>
    )
}