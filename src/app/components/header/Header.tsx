"use client" 
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'  

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname() 
    
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
    const closeSidebar = () => setIsSidebarOpen(false)

    useEffect(() => {
        closeSidebar()
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: 'Início' },
        { href: '/about-us', label: 'Sobre Nós' },
        { href: '/services', label: 'Serviços' },
        { href: '/pacotes', label: 'Pacotes Turísticos' },
        { href: '/blog', label: 'Blog & Inspiração' },
        { href: '/contacto', label: 'Contacto' },
    ]

    return (
        <header className={`flex w-full justify-between items-center h-20 px-4 fixed z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image 
                        src="/images/logorginal.png" 
                        alt="Logo" 
                        width={160} 
                        height={40} 
                        className="transition-transform hover:scale-105"
                    />
                </Link>
            </div>

            <nav className="hidden md:flex">
                <ul className='flex gap-6 font-bold text-sm xl:text-base'>
                    {navItems.map(item => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`transition-colors relative py-1 ${pathname === item.href ? 'text-[#F9D423]' : 'text-white hover:text-[#F9D423]'}`}>
                                {item.label}
                                {pathname === item.href && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F9D423]"></span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9D423] hover:bg-[#F9D423]/90 transition-colors">
                <div className="flex items-center gap-2">
                    <Image src="/images/telefone1.png" alt="Ícone de telefone" width={20} height={20} />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                        <p className="text-xs font-bold text-[#0871B5]">Ligue grátis:</p>
                        <p className="text-xs font-bold text-[#0871B5]">84 1781 | 82 1781</p>
                    </div>
                </div>
            </div>

            <button 
                className='md:hidden cursor-pointer p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#F9D423] rounded'
                onClick={toggleSidebar}
                aria-label="Abrir menu de navegação"
                aria-expanded={isSidebarOpen}>
                <HiOutlineMenuAlt4 size={24} />
            </button>

            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            <div 
                className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação">
                <div className="p-4 flex justify-between items-center border-b">
                    <Image src="/images/logorginal.png" alt="Logo" width={128} height={32} />
                    <button 
                        className="text-2xl text-[#0871B5] p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0871B5]"
                        onClick={closeSidebar}
                        aria-label="Fechar menu">
                        <AiOutlineClose />
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {navItems.map(item => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block font-semibold py-3 px-4 rounded-lg transition-colors ${pathname === item.href ? 'bg-[#0871B5] text-white' : 'hover:bg-[#0871B5]/10 text-gray-800'}`}
                                    onClick={closeSidebar}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 p-3 rounded-full bg-[#F9D423]">
                        <Image src="/images/telefone1.png" alt="Ícone de telefone" width={20} height={20} />
                        <p className="text-sm font-semibold text-[#0871B5]">Ligue grátis: 82 / 84 1781</p>
                    </div>
                </div>
            </div>
        </header>
    )
}