import { DefaultUi, Player, Youtube } from "@vime/react";
import { Image, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Button } from "./Button";
import { Card } from "./Card";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string | undefined
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data || !data.lesson) {
        return(
            <div className="flex flex-1 items-center justify-center bg-black"><p>Carregando...</p></div>
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col items-start gap-16 xl:flex-row">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                            <img 
                            className="h-16 w-16 rounded-full border-2 border-blue-500"
                            src={data.lesson.teacher.avatarURL}
                            alt="Teacher icon" 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                        )}
                    </div>

                    <div className="flex w-full flex-col gap-4 sm:flex-row xl:flex-col sm:w-auto">
                        <Button title="Comunidade no Discord" variant="primary" icon={<DiscordLogo size={24}/>}/>
                        <Button title="Acesse o desafio" variant="secondary" icon={<Lightning size={24}/>}/>
                    </div>
                </div>

                <div className="flex flex-col gap-8 mt-20 xl:flex-row">
                    <Card title="Material complementar" text="Acesse o material complementar para acelerar o seu desenvolvimento" icon={<FileArrowDown size={40}/>}/>
                    <Card title="Wallpapers exclusivos" text="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" icon={<Image size={40}/>}/>
                </div>
            </div>
        </div>
    )
}