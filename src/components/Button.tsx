import className from "classnames"

interface ButtonProps {
    title: string
    variant: 'primary' | 'secondary'
    icon: React.ReactNode
}

export function Button(props: ButtonProps) {
    return(
        <a 
        href="#"
        className={className("p-4 text-sm items-center rounded flex font-bold uppercase gap-2 justify-center transition-colors", {
            "bg-green-500": props.variant === 'primary',
            "hover:bg-green-700": props.variant === 'primary',
            "border": props.variant === 'secondary',
            "border-blue-500": props.variant === 'secondary',
            "text-blue-500": props.variant === 'secondary',
            "hover:bg-blue-500": props.variant === 'secondary',
            "hover:text-gray-900": props.variant === 'secondary',
        })}>
            {props.icon}
            {props.title}
        </a>
    )
}