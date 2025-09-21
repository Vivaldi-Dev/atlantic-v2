'use client'
import React from 'react'

import { Star } from "lucide-react";

export default function About() {
    return (
        <div className="max-w-[1640px] px-10 mx-auto md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
                <div className="hidden md:block">
                    <p className="text-xl font-bold Roboto mb-2">O que dizem sobre nós</p>
                    <p className="Roboto text-gray-600">
                        Na Atlantic Travel, cada viagem conta uma história. Estas são algumas experiências de quem já confiou em nós
                    </p>
                </div>

                <div className="hidden md:block">
                    <div className="grid grid-cols-2 mx-auto items-center gap-4 mb-5">
                        <div className="bg-gray-100 p-3 rounded-2xl">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">Joana</p>
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm Roboto mt-2">
                                A Atlantic Travel organizou a nossa lua-de-mel no Bazaruto. Serviço impecável e atenção em cada detalhe. Recomendo!
                            </p>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex justify-end text-yellow-500 mb-2">
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <p className="font-semibold">Sérgio M</p>

                            <p className="text-sm Roboto">
                                Reservei a viagem para Dubai e foi tudo perfeito, do voo ao hotel. Sem stress, só diversão
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mx-auto items-center gap-4 mb-5 ">
                        <div className="bg-gray-100 p-3 rounded-2xl">

                            <div className="flex items-center justify-between">
                                <p className="font-semibold">Elsa C</p>
                                <div className="flex justify-end text-yellow-500 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>


                            <p className="text-sm Roboto">
                                Sempre que viajo a trabalho ou lazer, confio na Atlantic. Rápidos, profissionais e disponíveis.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-2xl">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">Kevin</p>
                                <div className="flex justify-end text-yellow-500 mb-2">
                                    {[...Array(4)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm Roboto">
                                Sempre que viajo, escolho a Atlantic. Profissionalismo e confiança.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='md:hidden'>
                    <div className="">

                        <div className="container mx-auto grid-cols-1 md:grid-cols-3 gap-4 flex md:grid overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 snap-x snap-mandatory scrollbar-hide">
                            <div className="bg-gray-100 p-4 rounded-2xl w-[240px] h-[200px] flex-shrink-0 snap-center">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">Joana</p>
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm Roboto mt-2">
                                    A Atlantic Travel organizou a nossa lua-de-mel no Bazaruto. Serviço impecável e atenção em cada detalhe. Recomendo!
                                </p>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-2xl w-[240px] h-[200px] flex-shrink-0 snap-center">
                                <div className="flex items-center justify-between">
                                    <div className="flex justify-end text-yellow-500 mb-2">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                <p className="font-semibold">Sérgio M</p>
                                <p className="text-sm Roboto">
                                    Reservei a viagem para Dubai e foi tudo perfeito, do voo ao hotel. Sem stress, só diversão
                                </p>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-2xl w-[240px] h-[200px] flex-shrink-0 snap-center">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">Elsa C</p>
                                    <div className="flex justify-end text-yellow-500 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm Roboto">
                                    Sempre que viajo a trabalho ou lazer, confio na Atlantic. Rápidos, profissionais e disponíveis.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-2xl w-[240px] h-[200px] flex-shrink-0 snap-center">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">Kevin</p>
                                    <div className="flex justify-end text-yellow-500 mb-2">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm Roboto">
                                    Sempre que viajo, escolho a Atlantic. Profissionalismo e confiança.
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
