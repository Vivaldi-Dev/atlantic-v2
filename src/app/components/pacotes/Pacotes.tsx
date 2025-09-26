"use client"

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'
import FormRender from "../form/formrender/FormRender";

gsap.registerPlugin(ScrollTrigger);

export default function Pacotes() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 3);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:py-20" ref={sectionRef}>


      <div className="max-w-[1640px] mx-auto justify-center items-center flex mb-10 ">
          <FormRender/>
      </div>


      <div>
        <div className="text-center">
          <p className="Robotobold text-3xl md:text-5xl md:mb-4 mt-5 md:mt-0" ref={titleRef}>
            Pacotes Turísticos
          </p>
          <p className="Roboto mb-5" ref={subtitleRef}>
            Os nossos pacotes mais escolhidos
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-center">
          <button
            className="text-white bg-black p-4 rounded"
            ref={buttonRef}>
            Ver Todos Pacotes
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 px-4 items-center gap-6">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-3xl relative"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}>
              <div>
                <Image
                  src="/images/template.jpg"
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-t-3xl w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="Robotopacotes">Inclui voo + hotel + transfer.</p>
                <p className="Robotoboldpacotes">
                  A partir de 25.000 MT/pessoa
                </p>
              </div>
              <p className="absolute top-0 left-0 p-3 bg-[#FFC700] rounded-tl-2xl text-sm text-white">
                3 noites
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
