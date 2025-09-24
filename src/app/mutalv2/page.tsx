"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface BannerContent {
    bgImage: string;
    title: string;
    subtitle: string;
    button1Text: string;
    button2Text: string;
}

const HoverCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4 rounded-lg transition-all duration-300">
            <h3 className="text-lg font-bold text-center mb-2">{title}</h3>
            <p className="text-sm text-center">{description}</p>
            <button className="mt-3 bg-[#F7D007] text-black px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-600">
                Ver Detalhes
            </button>
        </div>
    );
};


const bannerContents: { [key: string]: BannerContent } = {

    '/mural/lado1.jpg': {
        bgImage: "/mural/lado1.jpg",
        title: "CHIDENGUELE - NAARA ECO LODGE",
        subtitle: "Lazer / 2 noites / 3 casais adultos",
        button1Text: "Saber mais",
        button2Text: "Reservar agora"
    },
    '/mural/lado2.jpg': {
        bgImage: "/mural/lado2.jpg",
        title: "CHIZAVANE - ZONA BRAZA BEACH LODGE",
        subtitle: "Aventura & Natureza / 03 noites / até 8 pessoas",
        button1Text: "Detalhes",
        button2Text: "Consultar preços"
    },
    '/mural/lado3.jpg': {
        bgImage: "/mural/lado3.jpg",
        title: "CITY TOUR - MAPUTO",
        subtitle: "Cultura & Cidade / 1 dia / Por pessoa",
        button1Text: "Explorar",
        button2Text: "Agendar tour"
    },
    '/mural/lado4.jpg': {
        bgImage: "/mural/lado4.jpg",
        title: "VILANCULOS MANGAL BEACH LODGE",
        subtitle: "Romance & Lua de Mel / 3 noites",
        button1Text: "Informações",
        button2Text: "Orçamento"
    },

    '/mural/frame1.jpg': {
        bgImage: "/mural/frame1.jpg",
        title: "CHIDENGUELE - NAARA ECO LODGE",
        subtitle: "Lazer / 2 noites / 3 casais adultos",
        button1Text: "Saber mais",
        button2Text: "Reservar agora"
    },
    '/mural/frame2.jpg': {
        bgImage: "/mural/frame2.jpg",
        title: "CHIZAVANE - ZONA BRAZA BEACH LODGE",
        subtitle: "Aventura & Natureza / 03 noites / até 8 pessoas",
        button1Text: "Detalhes",
        button2Text: "Consultar preços"
    },
    '/mural/frame4.jpg': {
        bgImage: "/mural/frame4.jpg",
        title: "VILANCULOS MANGAL BEACH LODGE",
        subtitle: "Romance & Lua de Mel / 3 noites",
        button1Text: "Informações",
        button2Text: "Orçamento"
    },
    '/mural/frame11.jpg': {
        bgImage: "/mural/frame11.jpg",
        title: "PAINTBALL - MACANETA",
        subtitle: "Diversão / Por pessoa",
        button1Text: "Ver atividades",
        button2Text: "Participar"
    },
    '/mural/frame3.jpg': {
        bgImage: "/mural/frame3.jpg",
        title: "CITY TOUR - MAPUTO",
        subtitle: "Cultura & Cidade / 1 dia / Por pessoa",
        button1Text: "Explorar",
        button2Text: "Agendar tour"
    },
    '/mural/frame6.png': {
        bgImage: "/mural/frame6.png",
        title: "VILANCULOS MANGAL BEACH LODGE",
        subtitle: "Família / 3 noites",
        button1Text: "Família",
        button2Text: "Planejar viagem"
    },
    '/mural/frame7.jpg': {
        bgImage: "/mural/frame7.jpg",
        title: "Experiências Únicas",
        subtitle: "Descubra destinos exclusivos",
        button1Text: "Descobrir",
        button2Text: "Personalizar"
    },
    '/mural/frame10.jpg': {
        bgImage: "/mural/frame10.jpg",
        title: "Ofertas Especiais",
        subtitle: "Promoções imperdíveis para você",
        button1Text: "Ver ofertas",
        button2Text: "Aproveitar"
    },
    '/mural/frame12.jpg': {
        bgImage: "/mural/frame12.jpg",
        title: "Ofertas Especiais",
        subtitle: "Promoções imperdíveis para você",
        button1Text: "Ver ofertas",
        button2Text: "Aproveitar"
    }
};


const defaultContent: BannerContent = {
    bgImage: "/images/bgbanner.jpg",
    title: "Viajar é viver novas histórias",
    subtitle: "Com a Atlantic Travel, o mundo está ao teu alcance.",
    button1Text: "Fala connosco",
    button2Text: "Simulação de Orçamento"
};

const NestedDiamond = () => {
    const [currentContent, setCurrentContent] = useState<BannerContent>(defaultContent);

    const handleImageClick = (imagePath: string) => {
        const content = bannerContents[imagePath] || defaultContent;
        setCurrentContent(content);
    };

    return (
        <div className='overflow-hidden'>
            <div
                className="relative h-[600px] xl:mt-35 2xl:mt-30 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url('${currentContent.bgImage}')` }}>
                <div className='grid grid-cols-2 h-full'>

                    <div className='flex justify-center items-center h-full'>
                        <div>
                            <div className='text-center'>
                                <p className='text-white font-semibold text-5xl Roboto mb-4'>{currentContent.title}</p>
                                <p className='text-white'>{currentContent.subtitle}</p>
                            </div>

                            <div className='text-center flex items-center gap-4 justify-center mt-5'>
                                <button className='rounded border border-white text-white py-2 px-10 hover:bg-white hover:text-black transition duration-300'>
                                    {currentContent.button1Text}
                                </button>

                                <button className='rounded bg-[#F7D007] py-2 px-6 hover:bg-yellow-600 transition duration-300'>
                                    {currentContent.button2Text}
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="relative h-full">
                        <div className="fullrotate absolute top-0 bottom-0 -right-90 -mt-140 bg-white h-[1950px] w-[700px] z-0"></div>

                        <div className="absolute right-10 inset-0 z-10 w-ft h-screen">

                            <div className='h-screen absolute w-25 fullrotate xl:right-80 2xl:right-66 top-0 p-4'>

                                <div className='w-full h-70 rounded-2xl -mt-60'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
                                        src={'/mural/lado1.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                        onClick={() => handleImageClick('/mural/lado1.jpg')}
                                    />
                                </div>


                                <div className='w-full h-38 rounded-2xl mt-5'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
                                        src={'/mural/lado2.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                        onClick={() => handleImageClick('/mural/lado2.jpg')}
                                    />
                                </div>


                                <div className='w-full h-38 rounded-2xl mt-3'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
                                        src={'/mural/lado3.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                        onClick={() => handleImageClick('/mural/lado3.jpg')}
                                    />
                                </div>


                                <div className='w-full h-80 rounded-2xl mt-5'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
                                        src={'/mural/lado4.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                        onClick={() => handleImageClick('/mural/lado4.jpg')}
                                    />
                                </div>
                            </div>


                            <div
                                className="w-125 h-75 -rotate-3 absolute -right-73 -top-2 rounded-br-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                                style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}
                                onClick={() => handleImageClick('/mural/frame12.jpg')}>
                                <Image
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                    src={'/mural/frame12.jpg'}
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                            </div>


                            <div
                                className="w-80 h-35  absolute xl:right-96 2xl:xl:right-100 top-0 rounded-br-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
                                style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}
                                onClick={() => handleImageClick('/mural/frame10.jpg')} >
                                <Image
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                    src={'/mural/frame10.jpg'}
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                            </div>



                            <div className="absolute right-40 top-0">

                                <div className="bg-white w-80 h-80 transform rotate-45 rounded-xl relative overflow-visible">

                                    <div className="absolute top-2 left-2 transform -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden"
                                            onClick={() => handleImageClick('/mural/frame1.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame1.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute top-40 left-2 leading-0 -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer"
                                            onClick={() => handleImageClick('/mural/frame2.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame2.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute right-2 top-19 transform -translate-y-1/2 -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer"
                                            onClick={() => handleImageClick('/mural/frame4.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame4.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute -right-40 top-19 transform -translate-y-1/2 -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer"
                                            onClick={() => handleImageClick('/mural/frame11.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame11.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute -bottom-16 -right-16 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                                            onClick={() => handleImageClick('/mural/frame3.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg rotate-0"
                                                src={'/mural/frame3.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-15 -right-57 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div
                                            className="w-36 h-36 transform rotate-45 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                                            onClick={() => handleImageClick('/mural/frame6.png')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame6.png'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-36 -right-[650px] transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div
                                            className="w-80 h-80 transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer bg-white p-2 border-4 border-white"
                                            onClick={() => handleImageClick('/mural/frame7.jpg')}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={'/mural/frame7.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                                style={{ objectPosition: '120% 40%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NestedDiamond;