import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
 

const font = Poppins({
    subsets:["latin"],
    weight:["600"]
})
interface IHeaderProps{
    label:string
}

export const Header =({label}:IHeaderProps) => {
return (
    <div className="h-full text-center ">
        <h1 className={cn(font.className, 'p-3 text-3xl font-semibold ')}>
       🔐 Auth
       </h1>
       <p className={cn("text-2xl text-gray-300", font.className)}>
        {label}
        </p> 

    </div>
   
)
}