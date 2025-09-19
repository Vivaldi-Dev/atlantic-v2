import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Voo from "../voo/Voo";

type FormType = "voo" | "atividade" | "rent" | "transfer" | null;

export default function FormRender() {
    const [activeForm, setActiveForm] = useState<FormType>(null);
    const formRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!formRef.current || !titleRef.current) return;

        if (activeForm) {
            gsap.to(titleRef.current, {
                autoAlpha: 0,
                y: -20,
                duration: 0.4,
                ease: "power3.inOut",
            });

            gsap.fromTo(
                formRef.current,
                { autoAlpha: 0, height: 0 },
                { autoAlpha: 1, height: "auto", duration: 0.6, ease: "power3.out" }
            );
        } else {
            gsap.to(titleRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
            });

            gsap.to(formRef.current, {
                autoAlpha: 0,
                height: 0,
                duration: 0.4,
                ease: "power3.inOut",
            });
        }
    }, [activeForm]);

    return (
        <div className="max-w-4xl mx-auto">
            <div ref={titleRef} className="text-white mb-4">
                <p className="Robotobold">Simulação de Orçamento</p>
                <p className="Roboto">
                    Escolhe destino, datas e serviços, e recebe o teu orçamento personalizado.
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4 text-white my-4">
                <button
                    onClick={() => setActiveForm(activeForm === "voo" ? null : "voo")}
                    className={`border p-2 rounded ${
                        activeForm === "voo" ? "bg-[#000] text-white border-0" : ""
                    }`}>
                    Voo
                </button>

                <button
                    onClick={() => setActiveForm(activeForm === "atividade" ? null : "atividade")}
                    className={`border p-2 rounded ${
                        activeForm === "atividade" ? "bg-[#F7D007] text-black" : ""
                    }`}>
                    Actividade
                </button>

                <button
                    onClick={() => setActiveForm(activeForm === "rent" ? null : "rent")}
                    className={`border p-2 rounded ${
                        activeForm === "rent" ? "bg-[#F7D007] text-black" : ""
                    }`}>
                    Rent-car
                </button>

                <button
                    onClick={() => setActiveForm(activeForm === "transfer" ? null : "transfer")}
                    className={`border p-2 rounded ${
                        activeForm === "transfer" ? "bg-[#F7D007] text-black" : ""
                    }`}>
                    Transfer
                </button>
            </div>

            <div ref={formRef} className="overflow-hidden w-full">
                {activeForm === "voo" && <Voo />}
                {activeForm === "atividade" && (
                    <div className="text-white">Formulário de Actividade (em breve)</div>
                )}
                {activeForm === "rent" && (
                    <div className="text-white">Formulário de Rent-car (em breve)</div>
                )}
                {activeForm === "transfer" && (
                    <div className="text-white">Formulário de Transfer (em breve)</div>
                )}
            </div>
        </div>
    );
}
