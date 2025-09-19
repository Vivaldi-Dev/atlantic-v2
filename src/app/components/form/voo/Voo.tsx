"use client" 
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";
import { MapPin, PlaneTakeoff } from "lucide-react";
import Image from 'next/image'

export default function Voo() {
    return (
        <div className="grid grid-cols-1 md sm:grid-cols-4 items-start rounded-lg p-2 md:p-6 gap-5">

            <div className="space-y-4">
                <div className="relative">
                    <label
                        className="block text-black font-medium text-start mb-2"
                        htmlFor="origem">
                        Origem
                    </label>
                    <MapPin className="absolute left-3 top-14 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        id="origem"
                        type="text"
                        placeholder="Origem"
                        className="pl-10 px-4 py-3 w-full rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#0871B5] transition-all"
                    />
                </div>

                <div className="relative">
                   
                    <PlaneTakeoff className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        id="destino"
                        type="text"
                        placeholder="Destino"
                        className="pl-10 px-4 py-3 w-full rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#0871B5] transition-all"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-black font-medium text-start mb-2">Data de Início</label>
                    <div className="relative flex items-center bg-white border border-gray-300 rounded-lg w-full">
                        <span className="absolute left-3 text-gray-500">
                            <FaCalendarAlt />
                        </span>
                        <DatePicker
                            placeholderText="Data de início"
                            className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                        />
                    </div>
                </div>

                <div>
                    <div className="relative flex items-center bg-white border border-gray-300 rounded-lg w-full">
                        <span className="absolute left-3 text-gray-500">
                            <FaCalendarAlt />
                        </span>
                        <DatePicker
                            placeholderText="Data do fim"
                            className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-black font-medium text-start mb-2">Passageiros</label>

                    <div className="relative flex items-center bg-white border border-gray-300 rounded-lg mb-3">
                        <span className="absolute left-3 text-gray-600">
                            <Image
                                src="/icons/adulto.png"
                                alt="Adulto"
                                width={16}
                                height={16}
                            />
                        </span>
                        <input
                            type="number"
                            min={1}
                            placeholder="Adultos"
                            className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                        />
                    </div>

                    <div className="relative flex items-center bg-white border border-gray-300 rounded-lg">
                        <span className="absolute left-3 text-gray-600">
                            <Image
                                src="/icons/person.png"
                                alt="Criança"
                                width={16}
                                height={16}
                            />
                        </span>
                        <input
                            type="number"
                            min={0}
                            placeholder="Crianças"
                            className="pl-10 pr-3 py-3 w-full rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex md:flex-col md:justify-center items-center gap-4">

                <div className="md:mt-7 md:mb-3">
                    <label className="flex items-center gap-3 text-sm font-medium text-gray-700  rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                            type="checkbox"
                            className="accent-[#0871B5] h-4 w-4"
                        />
                        <span>Ida e Volta</span>
                    </label>
                </div>

                <div className="md:mb-4">
                    <label className="flex items-center gap-3 text-sm font-medium text-gray-700  rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                            type="checkbox"
                            className="accent-[#0871B5] h-4 w-4"
                        />
                        <span>Só Ida</span>
                    </label>
                </div>




                <button className=" py-2 px-2 md:px-6 md:py-3 bg-[#0871B5] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Pesquisar Voos
                </button>
            </div>
        </div>
    );
}