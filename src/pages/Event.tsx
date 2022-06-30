import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import useScreen from "../lib/useScreen";

export function Event() {
    const screenSize = useScreen()
    const [openSideBar, setOpenSideBar] = useState(false)
    const { slug } = useParams<{slug: string}>()
    const navigate = useNavigate()

    function redirectHandle(redirectLink:string | undefined) {
        if(!slug && redirectLink)
        {
            navigate(`lesson/${redirectLink}`, {replace: true})
        }
    }

    return(
        <div className="flex flex-col min-h-screen">
            <Header menuClick={(open) => setOpenSideBar(open)} open={openSideBar}/>
            <main className="flex flex-1">
                <section className={"flex flex-1 flex-col " + ((screenSize.width! < 768 && !openSideBar) || screenSize.width! > 768 ? "" : "hidden")}>
                    {slug ? <Video lessonSlug={slug} /> : <div className="flex flex-1 items-center justify-center bg-black"><p>Carregando...</p></div>}
                    <Footer />
                </section>
                <Sidebar redirect={(redirectLink:string | undefined) => redirectHandle(redirectLink)} className={screenSize.width! > 1100 || openSideBar ? (screenSize.width! < 768 ? " flex-1" : "") : " hidden"}/>
            </main>
        </div>
    )
}