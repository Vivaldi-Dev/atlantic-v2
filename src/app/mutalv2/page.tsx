"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerContent {
    bgImage: string;
    title: string;
    subtitle: string;
    button1Text: string;
    button2Text: string;
}

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
    const [activeImage, setActiveImage] = useState<string>('');

    const handleImageClick = (imagePath: string) => {
        const content = bannerContents[imagePath] || defaultContent;
        setCurrentContent(content);
        setActiveImage(imagePath);
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            rotate: 2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    const contentVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        animate: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.3
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div className='overflow-hidden'>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentContent.bgImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative h-[600px] xl:mt-35 2xl:mt-30 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${currentContent.bgImage}')` }}>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className=""
                    />

                    <div className='grid grid-cols-2 h-full relative z-10'>
                        <div className='flex justify-center items-center h-full'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentContent.title}
                                    variants={contentVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className='relative'>
                                    <div className='text-center'>
                                        <motion.p 
                                            className='text-white font-semibold text-5xl mb-4'
                                            initial={{ y: 30, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}>
                                            {currentContent.title}
                                        </motion.p>
                                        <motion.p 
                                            className='text-white text-lg'
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}>
                                            {currentContent.subtitle}
                                        </motion.p>
                                    </div>

                                    <motion.div 
                                        className='text-center flex items-center gap-4 justify-center mt-5'
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}>
                                        <motion.button 
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className='rounded border-2 border-white text-white py-2 px-10 hover:bg-white hover:text-black transition duration-300'>
                                            {currentContent.button1Text}
                                        </motion.button>

                                        <motion.button 
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className='rounded bg-[#F7D007] py-2 px-6 hover:bg-yellow-600 transition duration-300 font-semibold'>
                                            {currentContent.button2Text}
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="relative h-full">
                            <div className="fullrotate absolute top-0 bottom-0 -right-95 -mt-140 bg-white xl:h-[1950px] 2xl:h-[1920px] w-[700px] z-0"></div>

                            <div className="absolute right-10 inset-0 z-10 w-ft h-screen">
                                <div className='relative'>
                                    <div className='h-screen absolute w-25 fullrotate xl:right-80 2xl:right-60 top-0 p-4'>
                                        <motion.div 
                                            className='w-full h-72 rounded-2xl -mt-60 overflow-hidden'
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={imageVariants}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                                                src={'/mural/lado1.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                                onClick={() => handleImageClick('/mural/lado1.jpg')}
                                            />
                                        </motion.div>

                                        <motion.div 
                                            className='w-full h-38 rounded-2xl mt-3 overflow-hidden'
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={imageVariants}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                                                src={'/mural/lado2.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                                onClick={() => handleImageClick('/mural/lado2.jpg')}
                                            />
                                        </motion.div>

                                        <motion.div 
                                            className='w-full h-38 rounded-2xl mt-3 overflow-hidden'
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={imageVariants}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                                                src={'/mural/lado3.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                                onClick={() => handleImageClick('/mural/lado3.jpg')}
                                            />
                                        </motion.div>

                                        <motion.div 
                                            className='w-full h-70 rounded-2xl mt-5 overflow-hidden'
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={imageVariants}>
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                                                src={'/mural/lado4.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                                onClick={() => handleImageClick('/mural/lado4.jpg')}
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    className="w-125 h-70 -rotate-3 absolute -right-71 -top-2 rounded-br-2xl cursor-pointer overflow-hidden"
                                    style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}
                                    whileHover={{ scale: 1.1, rotate: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => handleImageClick('/mural/frame12.jpg')}>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                        src="/mural/frame12.jpg"
                                        alt="Frame 12"
                                        width={500}
                                        height={500}
                                    />
                                </motion.div>

                                <motion.div
                                    className="w-80 h-38 absolute xl:right-96 2xl:xl:right-90 top-0 rounded-br-2xl cursor-pointer overflow-hidden"
                                    style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => handleImageClick('/mural/frame10.jpg')}>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                        src="/mural/frame10.jpg"
                                        alt="Frame 10"
                                        width={500}
                                        height={500}
                                    />
                                </motion.div>

                                <div className="absolute right-40 top-0">
                                    <div className="bg-white w-80 h-80 transform rotate-45 rounded-xl relative overflow-visible">
                                        {/* Frame 1 */}
                                        <div className="absolute top-2 left-2 transform -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 rounded-lg cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15,  }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame1.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame1.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Frame 2 */}
                                        <div className="absolute top-40 left-2 leading-0 -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame2.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame2.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>


                                        <div className="absolute -right-2 top-19 transform -translate-y-1/2 -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15}}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame4.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame4.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>


                                        <div className="absolute -right-43 top-19 transform -translate-y-1/2 -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15}}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame11.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame11.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>


                                        <div className="absolute -bottom-14 -right-21 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 rounded-lg cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame3.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg rotate-0"
                                                    src={'/mural/frame3.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="absolute -bottom-14 -right-62 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                            <motion.div
                                                className="w-39 h-36 transform rotate-45 rounded-lg cursor-pointer overflow-hidden"
                                                whileHover={{ scale: 1.15}}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame6.png')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame6.png'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Frame 7 */}
                                        <div className="absolute -bottom-38 -right-[650px] transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                            <motion.div
                                                className="w-80 h-80 transform rotate-45 cursor-pointer  p-2 "
                                                whileHover={{ scale: 1.1}}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                onClick={() => handleImageClick('/mural/frame7.jpg')}>
                                                <Image
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                    src={'/mural/frame7.jpg'}
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                    style={{ objectPosition: '120% 40%' }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default NestedDiamond;