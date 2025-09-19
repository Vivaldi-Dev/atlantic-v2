"use client" 
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'  

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathname = usePathname() 
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/about-us', label: 'Sobre Nós' },
        { href: '/services', label: 'Serviços' },
        { href: '/pacotes', label: 'Pacotes Turísticos' },
        { href: '/blog', label: 'Blog & Inspiração' },
        { href: '/contacto', label: 'Contacto' },
    ]

    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 p-16'>
            <div>
                <Image src="/images/logorginal.png" alt="Logo" width={160} height={40} />
            </div>

            <ul className='p-4 hidden md:flex gap-4 font-bold text-sm xl:text-base text-white'>
                {navItems.map(item => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={pathname === item.href ? 'text-[#F9D423]' : 'hover:text-[#F9D423] transition-colors'}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:flex items-center gap-4 px-6 py-2 rounded-full bg-[#F9D423]">
                <div className="flex items-center gap-2">
                    <Image src="/images/telefone1.png" alt="Telefone" width={20} height={20} />
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[#0871B5]">Ligue grátis:</p>
                        <p className="text-[11px] font-bold text-[#0871B5]">84 1781 | 82 1781</p>
                    </div>
                </div>
            </div>

            <div className='md:hidden cursor-pointer' onClick={toggleSidebar}>
                <HiOutlineMenuAlt4 size={24} />
            </div>

            <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <Image src="/images/logorginal.png" alt="Logo" width={128} height={32} />
                    <button className="text-2xl text-[#0871B5]" onClick={toggleSidebar}>
                        <AiOutlineClose />
                    </button>
                </div>

                <ul className="p-4 space-y-4">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`block font-semibold py-2 px-4 rounded-full ${pathname === item.href ? 'bg-[#0871B5] text-white' : 'hover:bg-[#0871B5]/20'} transition-colors`}
                                onClick={toggleSidebar}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 p-4 m-4 rounded-full bg-[#F9D423]">
                    <Image src="/images/telefone1.png" alt="Telefone" width={20} height={20} />
                    <p className="text-sm font-semibold text-[#0871B5]">Ligue grátis: 82 / 84 1781</p>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={toggleSidebar} />
            )}
        </div>
    )
}
