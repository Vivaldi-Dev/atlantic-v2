import React from 'react'

export default function FlyBanner() {
    return (
        <div className='bg-[#0871B5] h-64 justify-center'>
            <div className='p-8 text-center'>
                <p className='font-semibold Roboto text-white text-5xl'>Simulação de Orçamento</p>
                <p className='Roboto text-sm text-white'> Escolhe destino, datas e serviços, e recebe o teu orçamento personalizado.</p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-4 gap-10 mt-5'>
                <button className='p-2 bg-black rounded-full text-white'>
                    Voo
                </button>

                <button className='p-2 border border-white rounded-full text-white'>
                    Actividade
                </button>

                <button className='p-2  border border-white rounded-full text-white'>
                    Rent-car
                </button>

                <button className='p-2  border border-white rounded-full text-white'>
                    Transfer
                </button>
            </div>
        </div>
    )
}
