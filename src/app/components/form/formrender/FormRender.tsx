'use client'
import { useState } from 'react'
import Voo from "../voo/Voo";

import { FaPlane, FaHiking, FaCar, FaShuttleVan } from 'react-icons/fa';


export default function FormRender() {
    const [activeTab, setActiveTab] = useState('voos')

    const renderForm = () => {
        switch (activeTab) {
            case 'voos':
                return <Voo />
            case 'atividades':
                return <div> <p>brevemte</p></div>
            case 'rentcar':
                return <div> <p>brevemte</p></div>
            case 'transfer':
                return <div> <p>brevemte</p></div>
            default:
                return null
        }
    }

    return (
        <div className='bg-[#FFFFFF]  w-full max-w-7xl rounded sm:shadow overflow-hidden'>
            <div>
                <div className='flex items-center bg-[#0A6BB2] sm:bg-[#000000] justify-start border-b-2 p-5 border-[rgba(169,169,169,0.31)] pb-3 '>
                    <div className='flex sm:space-x-4 min-w-max '>
                        {[
                            { key: 'voos', label: 'Voos', icon: <FaPlane /> },
                            { key: 'atividades', label: 'Actividades', icon: <FaHiking /> },
                            { key: 'rentcar', label: 'Rent-a-Car', icon: <FaCar /> },
                            { key: 'transfer', label: 'Transfer', icon: <FaShuttleVan /> },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 py-2 px-2 sm:px-4 text-sm border-b whitespace-nowrap transition-all duration-200
                                    ${activeTab === tab.key
                                        ? 'border-b-2 border-[#FFFFFF] text-white'
                                        : 'border-transparent text-[#fff]'
                                    }`}>
                                <span className={`sm:text-lg ${activeTab === tab.key ? 'text-[#F7D007]' : ''} `}>{tab.icon}</span>
                                <span className={` ${activeTab === tab.key ? 'text-[#F7D007] text-[10px]' : ''}`}>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-4 min-h-[200px]'>
                <div>
                    {renderForm()}
                </div>
            </div>
        </div>
    )
}