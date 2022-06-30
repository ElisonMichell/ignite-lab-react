import { CaretRight } from "phosphor-react";

interface CardProps {
    title: string
    text: string
    icon: React.ReactNode
}

export function Card(props: CardProps) {
    return(
        <a href="#" className="bg-gray-700 rounded items-stretch overflow-hidden flex gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 flex items-center px-6">
               {props.icon}
            </div>

            <div className="flex-1 py-6 leading-relaxed">
                <strong className="text-2xl">{props.title}</strong>
                <p className="text-sm text-gray-200 mt-2">
                {props.text}
                </p>
            </div>

            <div className="flex items-center px-6">
                <CaretRight size={24}/>
            </div>
        </a>
    )
}