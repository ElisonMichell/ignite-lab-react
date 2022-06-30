import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import codeTemplate from "../assets/code-template.png";

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {name, email}
        })
        navigate('event')
    }

    return (
        <div>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="mt-10 flex flex-col items-center text-center lg:mt-20 lg:w-full lg:max-w-[1216px] lg:justify-between lg:mx-auto lg:flex-row lg:text-left">
                    <div className="max-w-[638px] mx-6 flex flex-col items-center lg:items-start">
                        <Logo />
                        <h1 className="mt-6 text-[2.5rem] leading-tight lg:8">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                        </h1>
                        <p className="mt-6 text-gray-200 leading-relaxed lg:mt-4">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>
                    <div className="p-8 w-full bg-gray-700 border-gray-500 mt-8 sm:w-auto sm:rounded">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                placeholder="Seu nome completo"
                                onChange={event => setName(event.target.value)}
                            />
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite seu e-mail"
                                onChange={event => setEmail(event.target.value)}
                            />
                            <button
                                disabled={loading}
                                type="submit"
                                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            >
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
                <img src={codeTemplate} alt="Code mockup image"  className="mt-4 px-2 lg:px-0 lg:mt-10"/>
            </div>
            <Footer />
        </div>
    )
}