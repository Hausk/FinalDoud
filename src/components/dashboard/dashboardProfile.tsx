import { getAuthSession } from "@/lib/auth"
import { DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"


export async function DashboardProfile() {
    const session = await getAuthSession()
    return (
        <DropdownMenuTrigger className="flex w-full">
            <Avatar>
                <AvatarImage src={session?.user.image ?? ''} alt="Image de profil" />
            </Avatar>
            <p className="my-auto pl-5">{session?.user.name ?? ''}</p>
        </DropdownMenuTrigger>
    )
}