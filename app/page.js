'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Zap, Target, Shield, Star, Download, ArrowRight, Check,
    Mail, Sun, Moon, Menu, X,
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

function Section({ children, className = '', id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
    return (
        <motion.section
            id={id}
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
        >
            {children}
        </motion.section>
    );
}

const apps = [
    {
        name: "Controle de Validade",
        tagline: "Evite desperdício, economize dinheiro",
        description: "Nunca mais deixe produtos vencer na sua geladeira ou despensa. O Controle de Validade monitora suas datas de forma inteligente e te avisa antes que seja tarde. acesse também em https://www.controledevalidade.com.br para usar no desktop!",
        icon: "📅",
        image: "/images/controle_de_validade.png",
        category: "Ferramentas",
        rating: "5.0",
        downloads: "5k+",
        isNew: true,
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.controledevalidade",
        features: ["Cadastro rápido de produtos", "Alertas automáticos de vencimento", "Dashboard com status visual", "Filtros por categoria"],
        gradientFrom: "#10b981",
        gradientTo: "#0d9488",
        colorLight: "bg-emerald-50 dark:bg-emerald-950/30",
        colorBadge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
    },
    {
        name: "Minha Lista de Compras",
        tagline: "Organize compras, controle gastos",
        description: "Chega de esquecer itens no mercado ou gastar mais do que planejou. O app mais simples e eficiente para organizar suas compras e manter o orçamento sob controle.",
        icon: "🛒",
        image: "/images/minha_lista_de_compras.png",
        category: "Compras",
        rating: "5.0",
        downloads: "1k+",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.listadecompras",
        features: ["Múltiplas listas simultâneas", "Cálculo automático do total", "Histórico de compras anteriores", "Compartilhamento de listas"],
        gradientFrom: "#3b82f6",
        gradientTo: "#4338ca",
        colorLight: "bg-blue-50 dark:bg-blue-950/30",
        colorBadge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    },
    {
        name: "Tira Time",
        tagline: "Times equilibrados em segundos",
        description: "O app favorito das peladas! Sorteia times levando em conta o nível de cada jogador, garantindo partidas justas e equilibradas para todo mundo se divertir.",
        icon: "⚽",
        image: "/images/tiratime.png",
        category: "Esportes",
        rating: "4.5",
        downloads: "10K+",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.tiratime2",
        features: ["Sorteio por nível de habilidade", "Seleção de goleiros", "Times sempre equilibrados", "Sem cadastro necessário"],
        gradientFrom: "#f97316",
        gradientTo: "#d97706",
        colorLight: "bg-orange-50 dark:bg-orange-950/30",
        colorBadge: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
    },
    {
        name: "Vinoteca",
        tagline: "Sua adega pessoal no bolso",
        description: "Registre, avalie e redescubra os vinhos que você amou. Com identificação por IA e histórico de degustações, sua jornada enológica nunca mais vai se repetir.",
        icon: "🍷",
        image: "/images/vinoteca.png",
        category: "Gastronomia",
        rating: "5.0",
        downloads: "100+",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.adega",
        features: ["Identificação de rótulos com IA", "Avaliações e notas pessoais", "Histórico de degustações", "Sugestões personalizadas"],
        gradientFrom: "#a855f7",
        gradientTo: "#7c3aed",
        colorLight: "bg-purple-50 dark:bg-purple-950/30",
        colorBadge: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
    },
];

const stats = [
    { value: "4", label: "Apps lançados" },
    { value: "10K+", label: "Downloads" },
    { value: "4.9★", label: "Avaliação média" },
    { value: "100%", label: "Gratuitos" },
];

const values = [
    { icon: <Zap className="w-6 h-6" />, label: "Simples", description: "Interface intuitiva, sem curva de aprendizado. Você abre e já sabe usar.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40" },
    { icon: <Target className="w-6 h-6" />, label: "Eficiente", description: "Apps leves e rápidos, otimizados para qualquer dispositivo Android.", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/40" },
    { icon: <Shield className="w-6 h-6" />, label: "Confiável", description: "Milhares de usuários satisfeitos e avaliações 5 estrelas na Play Store.", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
];

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) document.documentElement.classList.add('dark');
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const next = !darkMode;
        setDarkMode(next);
        localStorage.setItem('darkMode', String(next));
        document.documentElement.classList.toggle('dark', next);
    };

    const navLinks = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Aplicativos', href: '#aplicativos' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div style={{ background: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen transition-colors duration-300">

                <header
                    className="sticky top-0 z-50 transition-all duration-300"
                    style={{
                        backdropFilter: scrolled ? 'blur(16px)' : 'none',
                        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
                        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                        backgroundColor: scrolled ? (darkMode ? 'rgba(9,9,11,0.85)' : 'rgba(250,250,250,0.85)') : 'transparent',
                    }}
                >
                    <nav className="max-w-6xl mx-auto px-5 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <a href="#" className="flex items-center gap-2.5 group">
                                <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image src="/images/logo_512.png" alt="Cobiapps" width={32} height={32} className="w-full h-full object-cover" priority />
                                </div>
                                <span className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>Cobiapps</span>
                            </a>
                            <div className="hidden md:flex items-center gap-1">
                                {navLinks.map(link => (
                                    <a key={link.href} href={link.href} className="px-4 py-2 text-sm rounded-lg transition-opacity hover:opacity-70" style={{ color: 'var(--muted)' }}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={toggleDarkMode} className="flex items-center justify-center w-9 h-9 rounded-lg hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)', background: 'var(--surface-alt)' }} aria-label="Alternar modo escuro">
                                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                </button>
                                <a href="https://play.google.com/store/apps/developer?id=Cobi+Apps" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white transition-opacity hover:opacity-90" style={{ background: 'var(--accent)' }}>
                                    Google Play
                                </a>
                                <button className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg" style={{ color: 'var(--muted)', background: 'var(--surface-alt)' }} onClick={() => setMobileMenuOpen(v => !v)} aria-label="Menu">
                                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {mobileMenuOpen && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="md:hidden overflow-hidden">
                                    <div className="pb-4 pt-3 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border)' }}>
                                        {navLinks.map(link => (
                                            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 text-sm rounded-lg" style={{ color: 'var(--muted)' }}>{link.label}</a>
                                        ))}
                                        <a href="https://play.google.com/store/apps/developer?id=Cobi+Apps" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg text-white" style={{ background: 'var(--accent)' }} onClick={() => setMobileMenuOpen(false)}>
                                            Google Play
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
                </header>

                <section className="relative overflow-hidden py-24 md:py-36 lg:py-44">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)', opacity: 0.7 }} />
                    </div>
                    <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                    Apps para Android
                                </span>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex justify-center mb-8">
                                <div className="w-20 h-20 rounded-[22px] overflow-hidden" style={{ boxShadow: '0 20px 60px var(--accent-glow)' }}>
                                    <Image src="/images/logo_512.png" alt="Cobiapps" width={80} height={80} className="w-full h-full object-cover" priority />
                                </div>
                            </motion.div>
                            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ color: 'var(--foreground)' }}>
                                Apps que{' '}
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}>
                                    simplificam
                                </span>{' '}
                                seu dia
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                                Desenvolvemos aplicativos Android simples, eficientes e gratuitos — criados para resolver problemas reais do cotidiano.
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a href="https://play.google.com/store/apps/developer?id=Cobi+Apps" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4338ca 100%)', boxShadow: '0 8px 24px var(--accent-glow)' }}>
                                    Ver na Google Play
                                    <span className="group-hover:translate-x-0.5 transition-transform"><ArrowRight className="w-4 h-4" /></span>
                                </a>
                                <a href="#aplicativos" className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:opacity-80" style={{ color: 'var(--foreground)', background: 'var(--surface-alt)', border: '1px solid var(--border)' }}>
                                    Nossos aplicativos
                                </a>
                            </motion.div>
                            <motion.div variants={fadeUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ background: 'var(--border)' }}>
                                {stats.map(s => (
                                    <div key={s.label} className="flex flex-col items-center py-6 px-4" style={{ background: 'var(--surface)' }}>
                                        <span className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{s.value}</span>
                                        <span className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{s.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <Section id="sobre" className="py-24 md:py-32">
                    <div className="max-w-6xl mx-auto px-5 lg:px-8">
                        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--accent)' }}>Nossa missão</motion.p>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-5" style={{ color: 'var(--foreground)' }}>Tecnologia que cabe na sua rotina</motion.h2>
                        <motion.p variants={fadeUp} className="text-base md:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed" style={{ color: 'var(--muted)' }}>
                            A Cobiapps cria aplicativos Android que resolvem problemas cotidianos sem complicação. Com milhares de downloads e avaliações 5 estrelas, nossa filosofia é simples: menos é mais.
                        </motion.p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {values.map(v => (
                                <motion.div key={v.label} variants={fadeUp} className="group p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-default" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${v.bg} ${v.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {v.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{v.label}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{v.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                <div className="max-w-6xl mx-auto px-5 lg:px-8 mb-4">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
                        <div className="absolute inset-0 rounded-2xl" style={{ background: darkMode ? 'linear-gradient(135deg, rgba(6,78,59,0.4) 0%, rgba(4,120,87,0.3) 100%)' : 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' }} />
                        <span className="relative text-2xl">🎉</span>
                        <div className="relative flex-1 text-center sm:text-left">
                            <span className="font-semibold text-sm" style={{ color: darkMode ? '#6ee7b7' : '#064e3b' }}>Novo app lançado! </span>
                            <span className="text-sm" style={{ color: darkMode ? '#a7f3d0' : '#047857' }}>Controle de Validade está disponível gratuitamente na Google Play.</span>
                        </div>
                        <a href="https://play.google.com/store/apps/details?id=com.cobiapps.controledevalidade" target="_blank" rel="noopener noreferrer" className="relative flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90" style={{ background: '#059669' }}>
                            Baixar agora <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>

                <Section id="aplicativos" className="py-12 md:py-20">
                    <div className="max-w-6xl mx-auto px-5 lg:px-8">
                        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--accent)' }}>Portfólio</motion.p>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-5" style={{ color: 'var(--foreground)' }}>Nossos aplicativos</motion.h2>
                        <motion.p variants={fadeUp} className="text-base md:text-lg text-center max-w-xl mx-auto mb-16" style={{ color: 'var(--muted)' }}>
                            Todos gratuitos, sem anúncios invasivos, disponíveis na Google Play Store.
                        </motion.p>
                        <div className="flex flex-col gap-8">
                            {apps.map((app, i) => (
                                <motion.div key={app.name} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                    {app.isNew && (
                                        <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#059669' }}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                            Novo
                                        </div>
                                    )}
                                    <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        <div className={`relative lg:w-2/5 min-h-[220px] lg:min-h-[340px] flex items-center justify-center overflow-hidden ${app.colorLight}`}>
                                            <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${app.gradientFrom} 0%, ${app.gradientTo} 100%)` }} />
                                            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="relative z-10 w-32 h-32 lg:w-44 lg:h-44 rounded-3xl shadow-2xl overflow-hidden">
                                                <Image src={app.image} alt={app.name} width={176} height={176} className="w-full h-full object-contain" priority={i === 0} />
                                            </motion.div>
                                        </div>
                                        <div className="flex-1 p-7 lg:p-10 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.colorBadge}`}>{app.category}</span>
                                                <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                                                    <span className="text-amber-400"><Star className="w-4 h-4" fill="currentColor" /></span>{app.rating}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                                                    <Download className="w-4 h-4" />{app.downloads}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>{app.name}</h3>
                                            <p className="text-sm font-medium mb-3" style={{ color: app.gradientFrom }}>{app.tagline}</p>
                                            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>{app.description}</p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                                {app.features.map(f => (
                                                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)' }}>
                                                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ background: app.gradientFrom }}><Check className="w-3.5 h-3.5" strokeWidth={2.5} /></span>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div>
                                                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: `linear-gradient(135deg, ${app.gradientFrom} 0%, ${app.gradientTo} 100%)` }}>
                                                    Baixar na Play Store
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section id="contato" className="py-24 md:py-32">
                    <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center">
                        <motion.div variants={fadeUp} className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                            <Mail className="w-5 h-5" />
                        </motion.div>
                        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>Contato</motion.p>
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--foreground)' }}>Fale com a gente</motion.h2>
                        <motion.p variants={fadeUp} className="text-base md:text-lg mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>
                            Tem sugestões, encontrou um bug ou quer saber mais sobre nossos apps? Nossa equipe responde rapidinho.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <a href="mailto:roberto@cobiapps.com" className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-medium text-sm transition-all duration-200 hover:shadow-xl active:scale-95" style={{ background: 'var(--surface)', color: 'var(--foreground)', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                                <span style={{ color: 'var(--accent)' }}><Mail className="w-5 h-5" /></span>
                                roberto@cobiapps.com
                                <span className="group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--muted)' }}><ArrowRight className="w-4 h-4" /></span>
                            </a>
                        </motion.div>
                    </div>
                </Section>

                <footer className="py-8" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg overflow-hidden">
                                <Image src="/images/logo_512.png" alt="Cobiapps" width={24} height={24} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm" style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Cobiapps. Todos os direitos reservados.</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="/app-ads.txt" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>app-ads.txt</a>
                            <a href="mailto:contato@cobiapps.com" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Contato</a>
                            <a href="https://play.google.com/store/apps/developer?id=Cobi+Apps" target="_blank" rel="noopener noreferrer" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Google Play</a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
