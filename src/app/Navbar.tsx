import { Home, CircleUserRound, NotebookPen } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="animate-slide bg-secondary flex items-center gap-4 h-12 rounded-xl p-4">
            <Link href="/home" className="hover:opacity-50">
                <Home />
            </Link>
            <Link href="/about" className="hover:opacity-50">
                <CircleUserRound />
            </Link>
            <Link href="/contact" className="hover:opacity-50">
                <NotebookPen />
            </Link>

            <Link href="/not-found" className="text-white">
                <div className="animate-bounce w-6 h-6 text-white">
                    *
                </div>
            </Link>
        </nav>
    )
}







// "use client"

// import { useRouter } from "next/router"

// export function Navbar(){
//     const route: NextRouter = useRouter()

//     return (
//     <div className=" w-full m-1 p-1 rounded-md flex">
//         <button 
//         onClick={()=>{
//             route('/contect')
//         }} className="gap-1 text-xl font-extrabold">Contect</button>
//     </div>)
// }