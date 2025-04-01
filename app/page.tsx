import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "../components/auth/Login-button";

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})
export default function Page() {
  
  console.log(process.env.NEXTAUTH_SECRET)
  return (
    <main className="h-full flex  flex-col justify-center items-center
    bg-gradient-to-l  from-sky-300 to-green-800" >
     
    <div className="space-y-6 text-center">
      <h1 className={cn("text-6xl text-white font-semibold", font.className  )}>
        🔐Auth
        </h1>
        <p className="text-3xl text-white">
          A simple authantication service
        </p>
        <div>
          <LoginButton >
            <Button size="lg" variant="secondary">Log in</Button>
          </LoginButton>
         
        </div>
    </div>
    </main>
  );
}


