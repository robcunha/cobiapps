'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon, ArrowLeft, Shield } from 'lucide-react';

const sections = [
    {
        title: "1. Quem somos",
        content: `A Cobiapps é uma desenvolvedora independente de aplicativos móveis, responsável pelos apps listados nesta política. Para entrar em contato, envie um e-mail para roberto@cobiapps.com.`,
    },
    {
        title: "2. Aplicativos cobertos por esta política",
        content: null,
        list: [
            "Controle de Validade (Android e iOS)",
            "Minha Lista de Compras (Android e iOS)",
            "Tira Time (Android e iOS)",
            "Vinoteca (Android e iOS)",
        ],
    },
    {
        title: "3. Dados coletados",
        content: `Nossos aplicativos foram desenvolvidos com foco em privacidade. Todos os dados inseridos por você — como listas, produtos, avaliações e informações de jogadores — são armazenados exclusivamente no próprio dispositivo, utilizando o armazenamento local do sistema operacional.\n\nNão coletamos, transmitimos, armazenamos em servidores externos nem compartilhamos com terceiros nenhum dado pessoal inserido nos aplicativos.`,
    },
    {
        title: "4. Dados de uso e diagnóstico",
        content: `Não utilizamos ferramentas de analytics, rastreamento ou monitoramento de comportamento do usuário. Não integramos Google Analytics, Firebase Analytics, Mixpanel, Sentry ou qualquer serviço similar nos nossos aplicativos.`,
    },
    {
        title: "5. Publicidade",
        content: `Nossos aplicativos não exibem anúncios publicitários e não integram nenhuma rede de publicidade (como Google AdMob). Não coletamos dados para fins de publicidade direcionada.`,
    },
    {
        title: "6. Permissões do dispositivo",
        content: `Alguns aplicativos podem solicitar permissões do dispositivo (como câmera ou notificações) estritamente para fornecer funcionalidades específicas. Essas permissões são utilizadas apenas para o fim declarado e nunca para coleta de dados pessoais.`,
    },
    {
        title: "7. Lojas de aplicativos",
        content: `Os apps são distribuídos pela Google Play Store (Android) e pela Apple App Store (iOS). Essas plataformas possuem suas próprias políticas de privacidade e podem coletar dados de uso e diagnóstico conforme seus termos. Recomendamos a leitura das políticas de privacidade da Google e da Apple para mais informações.`,
    },
    {
        title: "8. Crianças",
        content: `Nossos aplicativos não são direcionados a crianças menores de 13 anos e não coletamos intencionalmente dados de menores. Se você acredita que seu filho forneceu dados por meio de um dos nossos apps, entre em contato conosco para que possamos tomar as medidas cabíveis.`,
    },
    {
        title: "9. Seus direitos",
        content: `Como não coletamos dados pessoais, não há dados sobre você armazenados em nossos servidores para acessar, corrigir ou excluir. Todos os dados do aplicativo residem no seu dispositivo e podem ser removidos desinstalando o app ou limpando o armazenamento do app nas configurações do sistema.`,
    },
    {
        title: "10. Alterações nesta política",
        content: `Esta política pode ser atualizada periodicamente. Em caso de alterações relevantes, publicaremos a versão atualizada nesta página. Recomendamos revisitá-la ocasionalmente.`,
    },
    {
        title: "11. Contato",
        content: `Dúvidas sobre esta Política de Privacidade? Fale conosco:\n\nE-mail: roberto@cobiapps.com`,
    },
];

export default function Privacidade() {
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

                {/* Header */}
                <header style={{ borderBottom: '1px solid var(--border)' }}>
                    <nav className="max-w-4xl mx-auto px-5 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link href="/" className="flex items-center gap-2.5 group">
                                <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image src="/images/logo_512.png" alt="Cobiapps" width={32} height={32} className="w-full h-full object-cover" priority />
                                </div>
                                <span className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>Cobiapps</span>
                            </Link>
                            <button
                                onClick={toggleDarkMode}
                                className="flex items-center justify-center w-9 h-9 rounded-lg hover:opacity-70 transition-opacity"
                                style={{ color: 'var(--muted)', background: 'var(--surface-alt)' }}
                                aria-label="Alternar modo escuro"
                            >
                                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                        </div>
                    </nav>
                </header>

                {/* Main content */}
                <main className="max-w-4xl mx-auto px-5 lg:px-8 py-12 md:py-20">

                    {/* Back link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm mb-10 hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--accent)' }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para a home
                    </Link>

                    {/* Page title */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Legal</p>
                            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>Política de Privacidade</h1>
                        </div>
                    </div>

                    <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
                        Última atualização: 16 de maio de 2026
                    </p>

                    <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: 'var(--muted)' }}>
                        A sua privacidade é fundamental para nós. Esta política explica de forma clara e objetiva como os aplicativos da Cobiapps tratam (ou não tratam) os seus dados.
                    </p>

                    {/* Sections */}
                    <div className="flex flex-col gap-10">
                        {sections.map((section) => (
                            <section key={section.title} className="rounded-2xl p-7 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>{section.title}</h2>
                                {section.content && (
                                    <div className="flex flex-col gap-3">
                                        {section.content.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                {section.list && (
                                    <ul className="flex flex-col gap-2">
                                        {section.list.map((item) => (
                                            <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--muted)' }}>
                                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </main>

                {/* Footer */}
                <footer className="py-8 mt-8" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="max-w-4xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg overflow-hidden">
                                <Image src="/images/logo_512.png" alt="Cobiapps" width={24} height={24} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm" style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Cobiapps. Todos os direitos reservados.</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href="/" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Home</Link>
                            <a href="mailto:roberto@cobiapps.com" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Contato</a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
