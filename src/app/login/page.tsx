import { LoginButton } from "@/components/dashboard/LoginButton";
import { LogoutButton } from "@/components/dashboard/LogoutButton";
import { NavBar } from "@/components/guest/NavBar";
import { getAuthSession } from "@/lib/auth";

export default async function Page() {
    const session = await getAuthSession()
    if(!session) {
        return (
        <div className="w-full h-screen flex justify-center">
            <LoginButton />
        </div>
        )
    }
    return (
        <>
            <NavBar />
            <div className="w-full h-screen flex">
                <div className="card card-side bg-base-100 shadow-xl m-auto">
                    <div className="card-body">
                        <h2 className="card-title">{session?.user.email ?? ''}</h2>
                        <p>{session?.user.name ?? ''}</p>
                        <div className="card-actions justify-end">
                            <LogoutButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )    
}