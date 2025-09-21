import React from 'react'
import Image from "next/image"
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero'
import Clients from './components/clients/Clients'
import Info from './components/info/nfo'

export default function page() {
    return (
        < >
            <div className="relative h-[400px] bg-cover bg-center bg-no-repeat bg-[url('/images/bannerimg.jpg')]">
                <div className="absolute inset-0 bg-black/20"></div>



                <div className="relative flex justify-center items-center h-full text-center">
                    <div className="Roboto">
                        <h1 className="text-white text-5xl ">
                            Sobre Nós - Atlantic Travel
                        </h1>
                        <p className="mt-5 text-sm text-white">O planeamento personalizado e seguro da sua viagem</p>

                        <button className="bg-[#F7D007] p-4 rounded text-black mt-5">
                            Nossos serviços
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center mt-5">
                <div className="text-center max-w-4xl">
                    <Image
                        width={500}
                        height={500}
                        src="/images/woman.jpg"
                        alt="Foto Atlantic Travel"
                        className="h-36 w-36 rounded-full mx-auto"
                    />
                    <p className="mt-4 text-gray-700">
                        Na Atlantic Travel, somos apaixonados por criar experiências de viagem únicas e seguras.
                        Atuamos no setor de turismo em Moçambique e no mundo, oferecendo soluções completas
                        para lazer, negócios e eventos corporativos.
                    </p>

                    <div className="flex items-center gap-2 justify-center mt-10">
                        <button className="border rounded py-2 px-8">
                            Email
                        </button>

                        <button className="bg-[#4AC959] py-2 px-6 rounded text-white">
                            Whatsapp
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className="grid grid-cols-2 px-4 mx-auto py-10 gap-10 max-w-[1640px]">
                    <div className="border border-gray-200 rounded p-2 flex items-center gap-4 h-[170px]">
                        <div className="bg-[#F7D007] p-3 w-fit rounded">
                            <Image
                                width={100}
                                height={100}
                                src="/images/missao.png" alt="" className="" />
                        </div>
                        <div className="w-2xl ">
                            <p className="font-semibold">Missão</p>
                            <p>Proporcionar serviços turísticos de alta qualidade, intermediando produtos com ética profissional, transparência e respeito às necessidades dos nossos clientes.</p>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded p-2 flex items-center gap-4 h-[170px]">
                        <div className="bg-[#F7D007] p-2 w-fit rounded">
                            <Image
                                width={100}
                                height={100}
                                src="/images/visao.png" alt="" className="" />
                        </div>
                        <div className="w-2xl ">
                            <p className="font-semibold">Visão</p>
                            <p>Ser reconhecida como agência de referência em Moçambique e além-fronteiras, destacando-nos pela excelência no planeamento de viagens e contribuição para o desenvolvimento do turismo.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 max-w-[1650px] mx-auto px-5">
                    <div className="border border-gray-200 rounded p-2 flex items-center gap-4 h-[170px]">
                        <div className="bg-[#0A6BB2] p-3 w-fit rounded">
                            <Image
                                width={100}
                                height={100} src="/images/dimond.png" alt="" className="" />
                        </div>
                        <div className="w-7xl ">
                            <p className="font-semibold">Valores</p>
                            <p>Competência:Equipe treinada e atualizada com as melhores práticas do mercado.
                                Responsabilidade:Cumprimos prazos e garantimos segurança em todos os serviços.
                                Flexibilidade:Adaptamo-nos às necessidades específicas de cada cliente.
                                Eficiência:Soluções rápidas e inteligentes para imprevistos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Services />
            <Hero />
            <Clients />
            <Info />

        </>
    )
}
