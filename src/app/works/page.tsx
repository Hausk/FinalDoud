import { Caroussel } from "@/components/guest/Swiper";
import { worksList } from "@/lib/works";

export default function Page() {
    return (
        <div className="h-screen w-screen flex bg-gradient-to-br from-red-950 via-gray-950 to-slate-950">
            <div className="my-auto w-full mx-auto h-full">
                <Caroussel works={worksList}/>
            </div>
        </div>
    )
}