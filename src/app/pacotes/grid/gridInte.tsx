import Image from 'next/image'
import React from 'react'

interface PackageData {
    id: number
    image: string
    nights: string
    alt: string
    title: string
    description: string
    price: string
}

const packagesData: PackageData[] = [
    {
        id: 1,
        image: '/images/singapore.jpg',
        nights: 'Aventura & Natureza',
        alt: 'CHIDENGUELE- NAARA ECO LODGE',
        title: 'SINGAPURA',
        description: 'Acomodação em hotel 4 estrelas + Voos +  excursões',
        price: 'A partir de 249.020,00 MT'
    },
    {
        id: 2,
        image: '/images/africasul.jpg',
        nights: 'Aventura & Natureza',
        alt: 'Africa Do Sul, MPUMALANGA - ZIP LINE',
        title: 'Africa Do Sul, MPUMALANGA - ZIP LINE',
        description: 'Zip Line + Elevador panorâmico  + Experiência florestal + Transporte ida e volta',
        price: 'A partir de 7.250,00 MT'
    },
    {
        id: 3,
        image: '/images/durban.jpg',
        nights: 'Cultura & Cidade',
        alt: 'DURBAN - DISCOVERT',
        title: 'DURBAN - DISCOVERT',
        description: 'Transporte + 2 Noites em Hotel 3 estrelas + Pequeno-almoço + City tour por Durban',
        price: 'A partir de 43.500,00 MT'
    },
    {
        id: 4,
        image: '/images/paris.jpg',
        nights: 'Romance & Lua de Mel / 5 noites / 2 adultos',
        alt: 'FRANÇA PARIS',
        title: 'FRANÇA PARIS',
        description: 'Visto para entrada + Voos + Acomodação em hotel 4 estrelas + Pequeno-almoço + Transfer',
        price: 'A partir de  261.525,00 MT'
    },
    {
        id: 5,
        image: '/images/suncity.png',
        nights: 'Família & Diversão / 5 noites / 2 adultos + 2 crianças - 12 e 7 anos',
        alt: 'SUN CITY- The Cascades Hotel at Sun City Resort ',
        title: 'SUN CITY- The Cascades Hotel at Sun City Resort Acomodação +  Voos • Transfers + Actividades aquáticas',
        description: 'A partir de 184.260,00 MT',
        price: 'A partir de 256.746,00 MT'
    },
    {
        id: 6,
        image: '/images/macaneta.jpg',
        nights: 'Cruzeiro / 1 noite em hotel 3 estrelas / • 4 noites no cruzeiro ',
        alt: ' MACANETA - PAINTBALL',
        title: ' MACANETA - PAINTBALL',
        description: 'Transporte + 200 balas + Lanches + Bebidas não alcoólicas + Taxas de participação',
        price: 'A partir de 3.750,00 MT'
    },


]

export default function GridLayoutv() {
    return (

        <div>
            <div className="relative z-10">
                <div className='text-center text-black space-y-2'>
                    <p className='Roboto text-4xl font-semibold'>Pronto para criar a tua próxima </p>
                    <p className='Roboto text-4xl font-semibold'>memória de viagem?</p>

                    <p className='text-sm py-5'>Escolhe o teu destino e deixa a Atlantic Travel cuidar de tudo.</p>

                    <button className='text-white p-3 bg-black rounded-xl'>
                        <p> Destinos & Experiências Internacionais</p>
                    </button>
                </div>


            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-20">
                {packagesData.map((packageItem) => (
                    <div key={packageItem.id} className="rounded-2xl overflow-hidden shadow-lg">
                        <div className="relative w-full h-64">
                            <Image
                                src={packageItem.image}
                                alt={packageItem.alt}
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                            <p>{packageItem.nights}</p>
                        </div>
                        <div className="bg-[#F5F5F5] p-4 rounded-b-2xl h-full">
                            <div className="text-sm space-y-2">
                                <p className="font-medium">{packageItem.title}</p>
                                <p className="text-gray-600">{packageItem.description}</p>
                            </div>
                            <p className="font-semibold mt-2">{packageItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}