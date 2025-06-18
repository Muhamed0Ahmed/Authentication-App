import { auth, signOut } from "@/auth"
import { Session } from "next-auth"

export default async function SettingPage (){
    const session:Session | null = await auth();


    
    return (
        <div className="h-full flex  flex-col justify-center items-center
    bg-gradient-to-l  from-sky-300 to-green-800 text-white">

            <h1 className="text-3xl">{session?.user ? `Hello ${session.user.name}` : "Not logged in"}</h1>
            <form action={async() => {
                "use server"
                await signOut()
            }}>
                <button type="submit" className="py-2 px-3 m-4 hover:bg-green-600 text-xl bg-white/20">Sign Out</button>
            </form>
        </div>
    )
}