'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { APP_ICON, CONTACT_EMAIL } from './config';

const footerLinks = [
    { label: 'Meus Filhos', href: '/meus-filhos' },
    { label: 'Privacidade', href: '/meus-filhos/privacidade' },
    { label: 'Termos de Uso', href: '/meus-filhos/termos' },
    { label: 'Excluir conta', href: '/meus-filhos/excluir-conta' },
];

export default function Shell({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) document.documentElement.classList.add('dark');
    }, []);

    const toggleDarkMode = () => {
        const next = !darkMode;
        setDarkMode(next);
        localStorage.setItem('darkMode', String(next));
        document.documentElement.classList.toggle('dark', next);
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div style={{ background: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen transition-colors duration-300">

                <header style={{ borderBottom: '1px solid var(--border)' }}>
                    <nav className="max-w-6xl mx-auto px-5 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-2 min-w-0">
                                <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                                    <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                        <Image src="/images/logo_512.png" alt="Cobiapps" width={32} height={32} className="w-full h-full object-cover" priority />
                                    </div>
                                    <span className="hidden sm:inline font-semibold text-base" style={{ color: 'var(--foreground)' }}>Cobiapps</span>
                                </Link>
                                <span className="hidden sm:inline" style={{ color: 'var(--border)' }}>/</span>
                                <Link href="/meus-filhos" className="flex items-center gap-2 min-w-0 hover:opacity-80 transition-opacity">
                                    <div className="w-7 h-7 rounded-lg overflow-hidden bg-white flex-shrink-0">
                                        <Image src={APP_ICON} alt="" width={28} height={28} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="font-semibold text-base truncate" style={{ color: 'var(--foreground)' }}>Meus Filhos</span>
                                </Link>
                            </div>
                            <button
                                onClick={toggleDarkMode}
                                className="flex items-center justify-center w-9 h-9 rounded-lg hover:opacity-70 transition-opacity flex-shrink-0"
                                style={{ color: 'var(--muted)', background: 'var(--surface-alt)' }}
                                aria-label="Alternar modo escuro"
                            >
                                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                        </div>
                    </nav>
                </header>

                {children}

                <footer className="py-8 mt-8" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg overflow-hidden">
                                <Image src="/images/logo_512.png" alt="Cobiapps" width={24} height={24} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm" style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Cobiapps. Todos os direitos reservados.</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                            {footerLinks.map(link => (
                                <Link key={link.href} href={link.href} className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>{link.label}</Link>
                            ))}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>{CONTACT_EMAIL}</a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
