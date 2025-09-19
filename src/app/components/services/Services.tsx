"use client"
import { useState, useRef, useEffect } from "react";
import Image from 'next/image'

export default function Services() {
    const [active, setActive] = useState(0);
    const scrollRef = useRef<HTMLUListElement>(null);

    const items = [
        "Passagens aéreas nacionais e internacionais",
        "Reservas de hotéis e resorts",
        "Rent-a-car e Transfer",
        "Atividades e passeios exclusivos",
        "Consultoria e vistos de viagem",
    ];

    useEffect(() => {
        if (scrollRef.current) {
            const activeElement = scrollRef.current.children[active] as HTMLElement;
            if (activeElement) {
                scrollRef.current.scrollTop = activeElement.offsetTop - (scrollRef.current.offsetHeight - activeElement.offsetHeight) / 2;
            }
        }
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollTop = scrollRef.current.scrollTop;
            const centerPosition = scrollRef.current.offsetHeight / 2;

            let closestIndex = 0;
            let minDistance = Infinity;

            Array.from(scrollRef.current.children).forEach((child, index) => {
                const element = child as HTMLElement;
                const distance = Math.abs(element.offsetTop + element.offsetHeight / 2 - (scrollTop + centerPosition));

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== active) {
                setActive(closestIndex);
            }
        }
    };

    return (
        <div className="max-w-[1640px] px-10 w-full mx-auto md:py-20">
            <div className="md:grid grid-cols-1 sm:grid-cols-2 items-center hidden">
                <div>
                    <p className="Roboto text-5xl hello">Serviços</p>
                    <p>Tudo o que precisas num só lugar</p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="p-2 border border-gray-200 flex items-center gap-4 h-24">
                        <div className="h-full w-24 flex-shrink-0">
                            <Image
                                width={500}
                                height={500}
                                src="/images/cama.jpg"
                                alt=""
                                className="h-full w-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="Roboto text-lg font-semibold">Passagens aéreas nacionais e internacionais</p>
                            <p className="Roboto text-sm">Nacionais e Internacionais com as Melhores Tarifas</p>
                        </div>
                    </div>

                    <div className="p-2 border border-gray-200 flex items-center gap-4 h-24">
                        <div className="h-full w-24 flex-shrink-0">
                            <Image
                                width={500}
                                height={500}
                                src="/images/hotel.png"
                                alt=""
                                className="h-full w-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="Roboto text-lg font-semibold">Reservas de hotéis e resorts</p>
                            <p className="Roboto text-sm">Encontre a Acomodação Perfeita</p>
                        </div>
                    </div>

                    <div className="p-2 border border-gray-200 flex items-center gap-4 h-24">
                        <div className="h-full w-24 flex-shrink-0">
                            <Image
                                width={500}
                                height={500}
                                src="/images/rentcar.png"
                                alt=""
                                className="h-full w-full object-cover rounded"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="Roboto text-lg font-semibold">Rent-a-car e Transfers</p>
                            <p className="Roboto text-sm">Liberdade para Explorar Seu Destino</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center md:hidden overflow-hidden">
                <p className="font-bold text-2xl">Serviços</p>
                <p className="Roboto mb-6">Tudo o que precisas num só lugar</p>

                <div className="relative w-full max-w-sm mx-auto h-48 overflow-hidden ">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-1/2 left-0 w-full h-12  border-b-2 border-yellow-400 transform -translate-y-1/2"></div>
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-90"></div>
                    </div>

                    <ul ref={scrollRef} className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-16" onScroll={handleScroll}>
                        {items.map((item, i) => (
                            <li key={i} className="snap-center h-12 flex items-center justify-center">
                                <span className={`text-lg transition-all duration-300 ${active === i ? "text-yellow-500 font-bold scale-110" : "text-gray-400"}`}>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}