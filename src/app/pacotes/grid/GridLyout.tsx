import Image from 'next/image'
import React from 'react'

interface PackageData {
    id: number
    image: string
    alt: string
    nights: string
    title: string
    description: string
    price: string
}

const packagesData: PackageData[] = [
    {
        id: 1,
        image: '/images/chiddenguele.png',
        nights: 'Lazer /  2 noites / 3 casais adultos ',
        alt: 'CHIDENGUELE- NAARA ECO LODGE',
        title: 'CHIDENGUELE - NAARA ECO LODGE',
        description: 'Acomodação + Transfer (Maputo - Chidenguele - Lodge - Chidenguele - Maputo) + Actividades:',
        price: 'A partir de 95.425,00 MT'
    },
    {
        id: 2,
        image: '/images/chizivane.jpg',
        nights: 'Aventura & Natureza / 03 noites /  até 8 pessoas',
        alt: 'CHIZAVANE - ZONA BRAZA BEACH LODGE',
        title: 'CHIZAVANE - ZONA BRAZA BEACH LODGE',
        description: 'Acomodação + Transfers (Maputo - Chizavane - Maputo)',
        price: 'A partir de 95.425,00 MT'
    },
    {
        id: 3,
        image: '/images/citytour.jpg',
        nights: 'Cultura & Cidade/ 1 dia  / Por pessoa',
        alt: 'CITY TOUR - MAPUTO',
        title: 'CITY TOUR - MAPUTO',
        description: 'Transporte + Lanche + Bebidas não alcoólicas + Frutas + Guia de turismo+ Entradas para 6 museus',
        price: 'A partir de 95.425,00 MT'
    },
    {
        id: 4,
        image: '/images/vilanculoss.jpg',
        nights: 'Romance & Lua de Mel /   3 noites',
        alt: 'VILANCULOS MANGAL BEACH LODGE',
        title: 'VILANCULOS MANGAL BEACH LODGE',
        description: 'Quartos (Estadia em suíte privada)  + Voos + Transfers',
        price: 'A partir de 137.999,00 MT'
    },
    {
        id: 5,
        image: '/images/vilaculos.jpg',
        nights: 'Família /3 noites',
        alt: 'VILANCULOS MANGAL BEACH LODGE ',
        title: 'VILANCULOS MANGAL BEACH LODGE ',
        description: 'A partir de 184.260,00 MT',
        price: 'A partir de 184.260,00 MT'
    },
    {
        id: 6,
        image: '/images/macaneta.jpg',
        nights: ' Diversão / Por pessoa',
        alt: ' MACANETA - PAINTBALL',
        title: ' MACANETA - PAINTBALL',
        description: 'Transporte + 200 balas + Lanches + Bebidas não alcoólicas + Taxas de participação',
        price: 'A partir de 3.750,00 MT'
    },


]

export default function GridLayout() {
    return (
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
    )
}