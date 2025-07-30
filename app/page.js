'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const apps = [
        {
            name: "Minha Lista de Compras",
            description: "Organize suas compras e controle gastos com facilidade",
            icon: "🛒",
            image: "/images/minha_lista_de_compras.png",
            category: "Compras",
            rating: "★★★★★",
            downloads: "10+",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.listadecompras",
            features: ["Listas inteligentes", "Cálculo automático", "Histórico de compras"]
        },
        {
            name: "Tira Time",
            description: "Sorteio de times para futebol com equilíbrio por habilidade",
            icon: "⚽",
            image: "/images/tiratime.png",
            category: "Esportes",
            rating: "★★★★☆",
            downloads: "1K+",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.tiratime2",
            features: ["Níveis de habilidade", "Escolha de goleiro", "Times equilibrados"]
        },
        {
            name: "Vinoteca",
            description: "Avalie e organize sua coleção de vinhos favoritos",
            icon: "🍷",
            image: "/images/vinoteca.png",
            category: "Gastronomia",
            rating: "★★★★★",
            downloads: "100+",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.cobiapps.adega",
            features: ["IA para identificação", "Avaliações pessoais", "Histórico de degustações"]
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300 sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 md:py-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg md:text-xl">C</span>
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Cobiapps</h1>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</a>
                            <a href="#aplicativos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Aplicativos</a>
                            <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</a>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                        <div className="md:hidden flex items-center space-x-2">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#sobre"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sobre
                                </a>
                                <a
                                    href="#aplicativos"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Aplicativos
                                </a>
                                <a
                                    href="#contato"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contato
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-white font-bold text-3xl md:text-4xl">C</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Cobiapps
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4">
                            Desenvolvemos aplicativos simples e eficientes para facilitar a vida dos usuários Android
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a
                                href="https://play.google.com/store/apps/developer?id=Cobi+Apps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
                            >
                                <Image
                                    src="/images/googleplay.png"
                                    alt="Ver na Google Play Store"
                                    width={200}
                                    height={60}
                                    className="h-12 md:h-14 w-auto"
                                />
                            </a>
                            <a
                                href="#aplicativos"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                            >
                                Nossos Apps
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre Nós</h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                            A Cobiapps desenvolve aplicativos simples e eficientes para facilitar a vida dos usuários Android.
                            Com milhares de downloads e avaliações positivas, nossa missão é criar soluções que ajudam no dia a dia —
                            de calculadoras a gerenciadores de tempo.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Simples</h3>
                            <p className="text-gray-600 dark:text-gray-300">Interface intuitiva e fácil de usar</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eficiente</h3>
                            <p className="text-gray-600 dark:text-gray-300">Apps leves e otimizados</p>
                        </div>
                        <div className="text-center p-6 sm:col-span-2 md:col-span-1">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Confiável</h3>
                            <p className="text-gray-600 dark:text-gray-300">Milhares de usuários satisfeitos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apps Section */}
            <section id="aplicativos" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Nossos Aplicativos</h2>
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 mb-8">
                            Descubra nossa coleção de apps úteis, todos disponíveis gratuitamente na Google Play Store
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
                            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">3</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Apps Lançados</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">1K+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">4.3★</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Avaliação Média</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Gratuitos</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {apps.map((app, index) => (
                            <div key={index} className="bg-transparent dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border p-6 border-gray-100 dark:border-gray-800">
                                <div className="text-center mb-6">
                                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-transparent dark:bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
                                        <Image
                                            src={app.image}
                                            alt={`Ícone do ${app.name}`}
                                            width={112}
                                            height={112}
                                            className="w-full h-full object-contain rounded-xl"
                                            priority={index === 0}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <span className="text-4xl hidden">{app.icon}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{app.name}</h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>

                                    {/* App Stats */}
                                    <div className="flex justify-center items-center space-x-4 mb-4 text-sm">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-medium">
                                            {app.category}
                                        </span>
                                        <span className="text-yellow-500">{app.rating}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{app.downloads}</span>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            {app.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center justify-center">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <a
                                    href={app.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full transition-all duration-300 group-hover:scale-105"
                                >
                                    <Image
                                        src="/images/googleplay.png"
                                        alt="Baixar na Google Play Store"
                                        width={200}
                                        height={60}
                                        className="w-full max-w-[200px] h-auto mx-auto hover:scale-105 transition-transform duration-300"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Entre em Contato</h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                        Tem uma sugestão, dúvida ou feedback? Adoraríamos ouvir de você!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
                        <a
                            href="mailto:contato@cobiapps.com"
                            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span className="mr-3 text-xl md:text-2xl">📧</span>
                            contato@cobiapps.com
                        </a>
                        <a
                            href="https://play.google.com/store/apps/developer?id=Cobi+Apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
                        >
                            <Image
                                src="/images/googlplay.png"
                                alt="Ver todos os apps na Google Play Store"
                                width={200}
                                height={60}
                                className="h-12 md:h-14 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">C</span>
                            </div>
                            <span className="text-xl font-bold">Cobiapps</span>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="/app-ads.txt" className="hover:text-white transition-colors">app-ads.txt</a>
                            <span>© 2025 Cobiapps. Todos os direitos reservados.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
