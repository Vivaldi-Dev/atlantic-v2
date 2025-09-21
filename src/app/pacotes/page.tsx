import React from 'react'
import GridLyout from './grid/GridLyout'
import GridLayoutv from './grid/gridInte'
import Hero from '../components/hero/Hero'



export default function Page() {
    return (

        <div>
            <div className="relative h-[400px] w-full flex justify-center items-center bg-[url('/images/pacotesbg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10">
                    <div className='text-center text-white space-y-2'>
                        <p className='Roboto text-5xl font-semibold'>Descobre o mundo com a</p>
                        <p className='Roboto text-5xl font-semibold'>Atlantic Travel</p>
                    </div>

                    <div className='flex items-center gap-2 border border-white p-3 mt-6 text-white rounded-lg'>

                        <input
                            type="text"
                            className='bg-transparent outline-0 placeholder-white'
                            placeholder="Pesquisar"
                        />
                    </div>
                </div>
            </div>

            <div className='items-center text-center mt-5'>
                <p className='Roboto font-semibold mb-2 text-4xl'>Viajar é viver novas histórias</p>
                <p className='text-sm'>Escolhe o teu destino e deixa a Atlantic Travel cuidar de tudo.</p>

                <button className='p-3 bg-black rounded-xl text-sm text-white mt-5'>
                    Destinos & Experiências Nacionais
                </button>
            </div>

            <div className='max-w-[1640px] mx-auto'>
                <GridLyout />
                <GridLayoutv />

            </div>
            <Hero />
        </div>

    )
}
