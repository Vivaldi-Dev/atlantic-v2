"use client"
import Image from 'next/image'

export default function Experience() {
    return (
        <div className="max-w-[1640px] md:px-10 w-full mx-auto py-10 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 px-4 items-center">
                <div className="text-center md:text-start hidden md:block">
                    <p className="Roboto Robotomob text-xl font-bold md:text-5xl">Melhores Experiências </p>
                    <p className="Roboto Robotomob md:text-5xl mb-3">e Lugares a Visitar</p>
                    <p className="Roboto text-sm text-[#000000]">Inspira-te para a tua próxima viagem</p>
                </div>

                <div className="text-center  block md:hidden ">
                    <p className="text-2xl font-bold leading-3">Melhores</p>
                    <p className="text-2xl font-bold leading-9">e Experiências</p>
                    <p className="text-2xl font-bold leading-2"> Lugares a Visitar</p>
                    <p className="text-sm  text-[#000000] mt-5">Inspira-te para a tua próxima viagem</p>
                </div>

                <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="flex flex-col items-center text-center space-y-1">
                            <Image
                                width={500}
                                height={500}
                                src="/images/maldivas.jpg"
                                alt=""
                                className="h-24 w-24 rounded-full" />

                            <p className="Roboto mt-2">Maldivas</p>
                            <p className="text-sm text-[#00000080]">Relaxa no paraíso</p>
                            <p className="RobotoBold text-xl">Praias Tropicais</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <Image
                                width={500}
                                height={500}
                                src="/images/africadosul.jpg"
                                alt=""
                                className="h-24 w-24 rounded-full" />

                            <p className="Roboto mt-2">África do Sul</p>
                            <p className="text-sm text-[#00000080]">Aventura sem igual</p>
                            <p className="RobotoBold text-xl">Safáris Africanos</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 ">
                        <div className="flex flex-col items-center text-center space-y-1">
                            <Image
                                width={500}
                                height={500}
                                src="/images/capitais.jpg"
                                alt=""
                                className="h-24 w-24 rounded-full" />

                            <p className="Roboto mt-2">New York</p>
                            <p className="text-sm text-[#00000080]">cidades que marcam</p>
                            <p className="RobotoBold text-xl">Capitais do Mundo</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <Image
                                width={500}
                                height={500}
                                src="/images/conselho.jpg"
                                alt=""
                                className="h-24 w-24 rounded-full" />

                            <p className="Roboto mt-2">Mocambique</p>
                            <p className="text-sm text-[#00000080]">Histórias que inspiram</p>
                            <p className="RobotoBold text-xl">Roteiros Culturais</p>
                        </div>
                    </div>

                </div>

                <div className="md:hidden grid grid-cols-3 gap-4 mt-5">
                    <div className="relative">
                        <Image
                            width={500}
                            height={500}
                            src="/images/propicais.jpg"
                            alt="Praias Tropicais"
                            className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="absolute inset-0 flex items-center justify-center text-center text-white Roboto text-sm bg-black/30 rounded-lg">
                            Praias <br /> Tropicais
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            width={500}
                            height={500}
                            src="/images/safaris.jpg"
                            alt="Safáris Africanos"
                            className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="absolute inset-0 flex items-center justify-center text-center text-white Roboto text-sm bg-black/30 rounded-lg">
                            Safáris <br /> Africanos
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            width={500}
                            height={500}
                            src="/images/capitais.jpg"
                            alt="Capitais do Mundo"
                            className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="absolute inset-0 flex items-center justify-center text-center text-white Roboto text-sm bg-black/30 rounded-lg">
                            Capitais do <br /> Mundo
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}
