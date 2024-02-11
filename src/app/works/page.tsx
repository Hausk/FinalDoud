import { Caroussel } from "@/components/guest/Swiper";
import { fetchWorksList } from "@/actions/fetchWork";
import { NavBar } from "@/components/guest/NavBar";

export default async function Page() {
    const worksList = await fetchWorksList()
    return (
        <>
            <NavBar />
            <div className="h-screen w-screen flex bg-gradient-to-br from-red-950 via-gray-950 to-slate-950">
                <div className="my-auto w-full mx-auto h-full">
                    <Caroussel works={worksList}/>
                </div>
            </div>
        </>
    )
}