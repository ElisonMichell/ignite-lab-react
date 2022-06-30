import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import className from 'classnames'

interface LessonProps {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>()
    const available = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR})

    const isActiveLesson = slug === props.slug

    return(
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={className("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ", {
                "bg-green-500": isActiveLesson
            })}>
                <header className="flex items-center justify-between">
                    {available ? (
                        <span className={className("text-sm text-blue-500 font-medium flex items-center gap-2",{
                            "text-white": isActiveLesson
                        })}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20}/>
                        Em breve
                        </span>
                    )}
                    <span className={className("text-xs rounded px-2 py-[0.125rem] text-green-300 border border-green-300 font-bold", {
                        "text-white": isActiveLesson || props.type !== 'live',
                        "border-white": isActiveLesson
                    })}>
                        {props.type === 'live' ? 'AO VIVO': 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={className("text-gray-200 mt-5 block",{
                    "text-white": isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}