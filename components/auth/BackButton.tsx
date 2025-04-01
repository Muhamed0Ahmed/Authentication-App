import { Button } from "@/components/ui/button"
import Link from "next/link";


interface IBackButtonprops {
    label:string;
    href:string;
}
const BackButton = ({
    label,
    href
}:IBackButtonprops) => {

    return (
        <Button variant="link" className="font-normal w-full " >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}
export default BackButton