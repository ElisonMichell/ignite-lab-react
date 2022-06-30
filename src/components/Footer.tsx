import { Rocketseat } from "./Rocketseat";

export function Footer() {
    return(
        <div className="flex flex-1 leading-relaxed lg:max-h-20">
            <div className="flex flex-col gap-6 items-center w-full px-8 py-6 mx-auto border-t border-gray-600 lg:flex-row">
                <Rocketseat />

                <div className="flex flex-col items-center gap-6 flex-1 text-gray-300 sm:flex-row sm:justify-between">
                    <a href="#">Elison Michell © 2022</a>
                    <div className="flex gap-6">
                        <a href="mailto:dev.elisonmichell@gmail.com">Gmail</a>
                        <a href="https://github.com/ElisonMichell">Github</a>
                        <a href="https://www.linkedin.com/in/dev-elison-michell/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}