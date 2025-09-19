"use client" 

import React from 'react'
import { useState, useRef } from "react";
import FormRender from "../form/formrender/FormRender";

export default function Banner() {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);
    const bannerContentRef = useRef(null);

    return (
        <div className="w-full h-[800px] md:h-screen relative bg-cover bg-center bg-no-repeat bg-[url('/images/bgbanner.jpg')] overflow-hidden ">

            <div className="hidden md:block absolute w-full h-28 top-0 left-0 bg-gray-900/40"></div>
            <div className="absolute w-full h-full bg-gray-900/40 md:hidden"></div>

            <div className="flex justify-center items-center h-full relative z-10">
                <div className="text-center">
                    <div ref={bannerContentRef} className="text-white space-y-4 -mt-50">
                        <p className="Robotobold text-4xl sm:text-5xl md:text-6xl mb-4">
                            Viajar é viver novas histórias
                        </p>
                        <p className="Roboto md:text-xl mb-8">
                            Com a Atlantic Travel, o mundo está ao teu alcance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <button className="border border-white px-8 py-3 rounded-lg text-white font-medium hover:bg-white hover:text-black transition-colors duration-300">
                                Fala connosco
                            </button>

                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="px-8 py-3 rounded-lg bg-[#F7D007] text-black font-medium hover:bg-yellow-500 transition-colors duration-300 md:hidden">
                                {showForm ? "Fechar Orçamento" : "Simular Orçamentos"}
                            </button>
                        </div>
                    </div>

                    <div
                        ref={formRef}
                        className="absolute bottom-0 mt-20 md:mt-110 inset-0 hidden md:flex flex-col items-center justify-center w-ful px-4 md:px-10 ">
                        <FormRender />
                    </div>

                    {showForm && (
                        <div
                            ref={formRef}
                            className="absolute bottom-0 inset-0 flex flex-col items-center justify-center w-full px-2 md:px-10 md:hidden mt-30 ">
                            <FormRender />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

