'use client'

import React, { useState, useEffect } from "react";

// Interface para os dados de cada imagem
interface ImageData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

// Dados das imagens com seus textos
const imageData: ImageData[] = [
  {
    id: 0,
    imageUrl: "/images/baner2.jpg",
    title: "Paisagens Exóticas",
    description: "Descubra as mais belas paisagens ao redor do mundo com nossos pacotes exclusivos.",
    buttonText: "Explorar Destinos"
  },
  {
    id: 1,
    imageUrl: "/images/exp2.jpg",
    title: "Aventuras Radicais",
    description: "Viva experiências únicas e emocionantes com nossas atividades de aventura.",
    buttonText: "Ver Aventuras"
  },
  {
    id: 2,
    imageUrl: "/images/exp3.jpg",
    title: "Cultura Local",
    description: "Conheça a cultura e tradições dos destinos mais autênticos do planeta.",
    buttonText: "Conhecer Cultura"
  },
  {
    id: 3,
    imageUrl: "/images/banner3.jpg",
    title: "Praias Paradisíacas",
    description: "Relaxe nas praias mais belas e tranquilas que você já viu em sua vida.",
    buttonText: "Descansar"
  },
  {
    id: 4,
    imageUrl: "/images/banner5.jpg",
    title: "Gastronomia",
    description: "Delicie-se com a culinária local e experiências gastronômicas únicas.",
    buttonText: "Degustar"
  },
  {
    id: 5,
    imageUrl: "/images/beautifulmob.jpg",
    title: "Luxo e Conforto",
    description: "Desfrute do máximo conforto e serviços exclusivos em nossos resorts premium.",
    buttonText: "Reservar"
  },
  {
    id: 6,
    imageUrl: "/images/bgparadao-min.jpg",
    title: "Natureza Pura",
    description: "Conecte-se com a natureza em seus destinos mais preservados e intocados.",
    buttonText: "Conectar"
  }
];

export default function InteractiveBackgroundWithText() {
  const [currentImage, setCurrentImage] = useState<ImageData>(imageData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeBackground = (id: number) => {
    if (id === currentImage.id || isTransitioning) return;
    
    setIsTransitioning(true);
    
    const selectedImage = imageData.find(img => img.id === id);
    if (selectedImage) {
      setTimeout(() => {
        setCurrentImage(selectedImage);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div 
      className={`flex justify-end items-center h-screen bg-cover bg-no-repeat bg-center transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
      style={{ backgroundImage: `url(${currentImage.imageUrl})` }}
    >
      
      <div className="grid grid-cols-2 items-center w-full h-full bg-black/30">
        
        <div className="pl-20 text-white transition-all duration-700">
          <h2 className="text-5xl font-bold mb-6 animate-fadeIn">{currentImage.title}</h2>
          <p className="text-xl max-w-md mb-8 animate-fadeIn delay-200">{currentImage.description}</p>
          {/* <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors duration-300 animate-fadeIn delay-500">
            {currentImage.buttonText}
          </button> */}
        </div>
        
        <div className="mr-40 relative w-[550px] h-[550px] transform rotate-45 overflow-hidden">
          <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
            
            <div className="w-60 h-60 transform rotate-45 flex items-center justify-center -translate-y-[200px] relative">
              
              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-4 left-18 -translate-x-1/2 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 1 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[1].imageUrl})` }}
                onClick={() => changeBackground(1)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Aventura</span>
              </div>

              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center bottom-5 right-4 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 2 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[2].imageUrl})` }}
                onClick={() => changeBackground(2)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Cultura</span>
              </div>

              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-30 left-5 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 3 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[3].imageUrl})` }}
                onClick={() => changeBackground(3)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Praias</span>
              </div>

            
              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-4 right-4 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 4 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[4].imageUrl})` }}
                onClick={() => changeBackground(4)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Gastronomia</span>
              </div>

            </div>

            <div 
              className={`absolute w-65 h-65 transform rotate-45 flex items-center justify-center translate-x-[210px] bg-cover bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 ${currentImage.id === 5 ? 'ring-4 ring-white' : 'opacity-80'}`}
              style={{ backgroundImage: `url(${imageData[5].imageUrl})` }}
              onClick={() => changeBackground(5)}>
              <span className="-rotate-45 text-white font-bold bg-black/50 px-2 rounded">Luxo</span>
            </div>

            <div className="absolute w-60 h-60 transform rotate-45 flex items-center justify-center translate-y-[200px]">
              
              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-4 left-18 -translate-x-1/2 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 0 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[0].imageUrl})` }}
                onClick={() => changeBackground(0)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Paisagens</span>
              </div>

              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center bottom-5 right-4 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 6 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[6].imageUrl})` }}
                onClick={() => changeBackground(6)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Natureza</span>
              </div>

              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-30 left-5 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 0 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[0].imageUrl})` }}
                onClick={() => changeBackground(0)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Paisagens</span>
              </div>

              <div 
                className={`absolute w-24 h-24 transform rotate-0 flex items-center justify-center top-4 right-4 bg-cover bg-no-repeat cursor-pointer hover:scale-110 transition-all duration-300 ${currentImage.id === 1 ? 'ring-4 ring-white' : 'opacity-80'}`}
                style={{ backgroundImage: `url(${imageData[1].imageUrl})` }}
                onClick={() => changeBackground(1)}>
                <span className="-rotate-45 text-white text-xs font-bold bg-black/50 px-1 rounded">Aventura</span>
              </div>
            </div>

            <div 
              className={`absolute w-65 h-65 transform rotate-45 flex items-center justify-center -translate-x-[210px] bg-cover bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 ${currentImage.id === 2 ? 'ring-4 ring-white' : 'opacity-80'}`}
              style={{ backgroundImage: `url(${imageData[2].imageUrl})` }}
              onClick={() => changeBackground(2)}>
              <span className="-rotate-45 text-white font-bold bg-black/50 px-2 rounded">Cultura</span>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {imageData.map((img) => (
          <button
            key={img.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage.id === img.id ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => changeBackground(img.id)}
            aria-label={`Selecionar ${img.title}`}
          />
        ))}
      </div> */}
    </div>
  );
}