import { Logo } from "./Logo";
import useScreen from "../lib/useScreen";
import { List, X } from "phosphor-react";

interface HeaderProps {
    open: boolean
    menuClick: (sidebar:boolean) => void
}

export function Header(prop : HeaderProps) {
    const screen = useScreen()
    return(
        <header className="w-full py-5 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 vd:justify-center">
            <Logo />
            {screen.width! < 1100 ? (
                <button onClick={() => prop.menuClick(!prop.open)} className="text-green-300 flex items-center">
                    <p className="text-gray-100 mr-[7px]">Aulas</p>
                    {prop.open ? (<X size={32}/>) : (<List size={32}/>)}
                    
                </button>
                ) : undefined
            }
        </header>
    )
}