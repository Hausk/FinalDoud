import { Caroussel } from "@/components/guest/Swiper";
import { worksList } from "@/lib/works";

export default function Page() {
    return (
        <div className="h-dvh w-dvw flex">
            <div className="my-auto w-full mx-auto h-full">
                <Caroussel works={worksList}/>
            </div>
        </div>
    )
}