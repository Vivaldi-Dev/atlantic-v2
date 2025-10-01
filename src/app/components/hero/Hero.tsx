'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const slides = [
    {
      image: '/images/maputo.jpg',
      title: 'Moçambique espera por ti!',
      subtitle: 'Moçambique é uma terra de contrastes naturais e culturais impressionantes.',
      description: ''
    },
    {
      image: '/images/pasta.jpg',
      title: 'Atlantic Travel ITB Asia 2025',
      subtitle: 'Representando Moçambique no mundo.',
      description: ''
    },
    {
      image: '/images/airport.jpg',
      title: 'Por Que Escolher uma Agência em Vez de Viajar Por Conta Própria?',
      subtitle: 'Com o crescimento das plataformas digitais, é cada vez mais comum os viajantes considerarem planejar suas próprias viagens. No entanto, contar com uma agência de viagens especializada oferece vantagens significativas que vão além da simples reserva de passagens e hospedagem.',
      description: ''
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!slides.length || !isAutoPlaying) return;

    const interval = setInterval(() => {
      // Inicia a animação de fade out
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % slides.length
        );
        // Completa a transição com fade in
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlaying]);

  const goToImage = (index: number) => {
    setFade(false);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }, 500);
  };

  if (!slides.length) return null;

  return (
    <div className="hidden md:block relative h-[500px] w-full overflow-hidden mt-20 mb-20">

      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </div>
        ))}
      </div>

      {/* Texto no lado direito */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className={`transform transition-all duration-700 delay-300 ${
          fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="max-w-2xl mx-10">
            <div className="text-white Roboto bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border-l-4 border-blue-500">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {slides[currentIndex].title}
              </h1>
              
              {slides[currentIndex].subtitle && (
                <p className="text-xl mb-4 leading-relaxed">
                  {slides[currentIndex].subtitle}
                </p>
              )}
              
              {slides[currentIndex].description && (
                <p className="text-lg leading-relaxed">
                  {slides[currentIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white bg-opacity-50 w-3 hover:bg-opacity-70 hover:w-4'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {slides.length}
      </div>

    </div>
  );
}