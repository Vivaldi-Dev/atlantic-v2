import React from 'react';
import Image from 'next/image'

interface MuralData {
    id: number
    image: string
    alt: string
    nights: string
    title: string
    description: string

}

const muralData: MuralData[] = [
    {
        id: 1,
        image: '../../../public/mural/frame1.jpg',
        nights: 'Lazer /  2 noites / 3 casais adultos ',
        alt: 'CHIDENGUELE- NAARA ECO LODGE',
        title: 'CHIDENGUELE - NAARA ECO LODGE',
        description: 'Acomodação + Transfer (Maputo - Chidenguele - Lodge - Chidenguele - Maputo) + Actividades:',

    },
    {
        id: 2,
        image: '../../../public/mural/frame2.jpg',
        nights: 'Aventura & Natureza / 03 noites /  até 8 pessoas',
        alt: 'CHIZAVANE - ZONA BRAZA BEACH LODGE',
        title: 'CHIZAVANE - ZONA BRAZA BEACH LODGE',
        description: 'Acomodação + Transfers (Maputo - Chizavane - Maputo)',

    },
    {
        id: 3,
        image: '/images/citytour.jpg',
        nights: 'Cultura & Cidade/ 1 dia  / Por pessoa',
        alt: 'CITY TOUR - MAPUTO',
        title: 'CITY TOUR - MAPUTO',
        description: 'Transporte + Lanche + Bebidas não alcoólicas + Frutas + Guia de turismo+ Entradas para 6 museus',

    },
    {
        id: 4,
        image: '/images/vilanculoss.jpg',
        nights: 'Romance & Lua de Mel /   3 noites',
        alt: 'VILANCULOS MANGAL BEACH LODGE',
        title: 'VILANCULOS MANGAL BEACH LODGE',
        description: 'Quartos (Estadia em suíte privada)  + Voos + Transfers',

    },
    {
        id: 5,
        image: '/images/vilaculos.jpg',
        nights: 'Família /3 noites',
        alt: 'VILANCULOS MANGAL BEACH LODGE ',
        title: 'VILANCULOS MANGAL BEACH LODGE ',
        description: 'A partir de 184.260,00 MT',

    },
    {
        id: 6,
        image: '/images/macaneta.jpg',
        nights: ' Diversão / Por pessoa',
        alt: ' MACANETA - PAINTBALL',
        title: ' MACANETA - PAINTBALL',
        description: 'Transporte + 200 balas + Lanches + Bebidas não alcoólicas + Taxas de participação',

    },


]

const NestedDiamond = () => {

    return (


        <div className='overflow-hidden'>
            <div className="  h-[600px] mt-20  bg-cover bg-center bg-no-repeat bg-[url('/images/bgbanner.jpg')] overflow-hidden">


                <div className='grid grid-cols-2'>

                    <div className=''>
                        <p>jhdsjkh</p>
                    </div>

                    <div className="relative  h-full">
                        <div className="absolute top-0 bottom-0 right-0 bg-white h-screen w-[600px] z-0"></div>


                        <div className="absolute right-0 inset-0  z-10  w-ft h-screen">


                            <div className='h-screen absolute w-25 fullrotate right-66 top-0 p-4 '>
                                <div className='bg-white  w-full h-70 rounded-2xl -mt-60 '>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg  shadow-lg "
                                        src={'/mural/lado1.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className=' w-full h-38 rounded-2xl mt-5'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg  shadow-lg "
                                        src={'/mural/lado2.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className='w-full h-38 rounded-2xl mt-3'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg  shadow-lg "
                                        src={'/mural/lado3.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className='w-full h-80 rounded-2xl mt-5'>
                                    <Image
                                        className="w-full h-full object-cover rounded-lg  shadow-lg "
                                        src={'/mural/lado4.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />

                                </div>
                            </div>


                            <div
                                className="w-125 h-75 -rotate-3 absolute -right-73 -top-2 rounded-br-2xl  hover:scale-110 transition-all duration-300 cursor-pointer"
                                style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} >
                                <Image
                                    className="w-full h-full object-cover rounded-lg  shadow-lg "
                                    src={'/mural/frame10.jpg'}
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                            </div>

                            <div className="absolute right-40 top-0">

                                <div
                                    className="w-70 h-35  absolute right-60 top-0 rounded-br-2xl  hover:scale-110 transition-all duration-300 cursor-pointer"
                                    style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }} >
                                    <Image
                                        className="w-full h-full object-cover rounded-lg  shadow-lg "
                                        src={'/mural/frame10.jpg'}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>


                                <div className="w-80 h-80  transform rotate-45 rounded-xl  relative overflow-visible">

                                    <div className="absolute top-2 left-2   transform  -rotate-45">
                                        <div className="w-36 h-36 transform rotate-45 rounded-lg  hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden">

                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame1.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>

                                    </div>

                                    <div className="absolute top-40 left-2 leading-0 -rotate-45">
                                        <div className="w-36 h-36  transform rotate-45  hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame2.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute right-2 top-19 transform -translate-y-1/2 -rotate-45">
                                        <div className="w-36 h-36 bg-gradient-to-br transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame4.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute -right-40 top-19 transform -translate-y-1/2 -rotate-45">
                                        <div className="w-36 h-36  transform rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame11.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>


                                    <div className="absolute -bottom-16 -right-16 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div className="w-36 h-36 bg-gradient-to-br transform rotate-45 rounded-lg  hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame3.jpg'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-15 -right-57 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div className="w-36 h-36  transform rotate-45 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                                            <Image
                                                className="w-full h-full object-cover rounded-lg  shadow-lg "
                                                src={'/mural/frame6.png'}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-36 -right-[650px] transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <div className="w-80 h-80  transform rotate-45  hover:scale-110 transition-all duration-300 cursor-pointer">
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