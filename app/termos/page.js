'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon, ArrowLeft, ScrollText } from 'lucide-react';

const sections = [
    {
        title: "1. Aceitação dos Termos",
        content: `Ao baixar, instalar ou utilizar qualquer aplicativo da Cobiapps, você concorda com estes Termos de Uso. Se não concordar com alguma condição, não utilize nossos aplicativos.\n\nEstes Termos se aplicam a todos os aplicativos publicados pela Cobiapps, incluindo Controle de Validade, Minha Lista de Compras, Tira Time e Vinoteca.`,
    },
    {
        title: "2. Descrição dos Serviços",
        content: `A Cobiapps desenvolve e distribui aplicativos móveis gratuitos para Android e iOS. Nossos apps são ferramentas de produtividade e utilidade pessoal, disponibilizados sem cobrança e sem anúncios invasivos.\n\nNos reservamos o direito de modificar, suspender ou encerrar qualquer aplicativo a qualquer momento, sem aviso prévio.`,
    },
    {
        title: "3. Uso Permitido",
        content: `Você pode utilizar nossos aplicativos para fins pessoais, não comerciais. É expressamente proibido:\n\n• Copiar, modificar, distribuir ou fazer engenharia reversa dos aplicativos;\n• Utilizar os apps para fins ilegais, fraudulentos ou que causem dano a terceiros;\n• Tentar acessar partes não autorizadas do sistema ou infraestrutura;\n• Remover ou alterar avisos de direitos autorais ou marcas registradas.`,
    },
    {
        title: "4. Propriedade Intelectual",
        content: `Todos os direitos sobre os aplicativos — incluindo código-fonte, design, ícones, logotipos, textos e funcionalidades — são de propriedade exclusiva da Cobiapps e estão protegidos pelas leis de propriedade intelectual.\n\nO uso dos aplicativos não transfere ao usuário nenhum direito de propriedade sobre eles.`,
    },
    {
        title: "5. Isenção de Garantias",
        content: `Os aplicativos são fornecidos "no estado em que se encontram", sem garantias expressas ou implícitas de qualquer tipo, incluindo, sem limitação, garantias de adequação a uma finalidade específica, disponibilidade contínua ou ausência de erros.\n\nNão garantimos que os aplicativos funcionarão sem interrupções, atrasos ou falhas técnicas.`,
    },
    {
        title: "6. Limitação de Responsabilidade",
        content: `Na máxima extensão permitida pela legislação aplicável, a Cobiapps não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da impossibilidade de uso dos aplicativos, incluindo perda de dados, lucros cessantes ou interrupção de negócios.\n\nO usuário é inteiramente responsável por manter cópias de segurança dos dados inseridos nos aplicativos.`,
    },
    {
        title: "7. Disponibilidade e Atualizações",
        content: `Podemos lançar atualizações, correções ou novas versões dos aplicativos a qualquer momento. Algumas atualizações podem ser obrigatórias para o correto funcionamento do app.\n\nNão garantimos que determinada versão de um aplicativo continuará disponível indefinidamente nas lojas de distribuição.`,
    },
    {
        title: "8. Lojas de Aplicativos",
        content: `Nossos aplicativos são distribuídos pela Google Play Store (Android) e pela Apple App Store (iOS). Ao baixá-los, você também concorda com os termos de serviço dessas plataformas.\n\nA Cobiapps não se responsabiliza por condições, políticas ou cobranças impostas pelas lojas de distribuição.`,
    },
    {
        title: "9. Menores de Idade",
        content: `Nossos aplicativos são destinados a usuários com 13 anos de idade ou mais. Pessoas com menos de 18 anos devem utilizar os aplicativos somente com supervisão de um responsável legal.\n\nNão coletamos intencionalmente dados de crianças menores de 13 anos. Caso você identifique uso indevido por menores, entre em contato conosco.`,
    },
    {
        title: "10. Privacidade",
        content: `O tratamento de dados pessoais é regido pela nossa Política de Privacidade, disponível em cobiapps.com/privacidade. Ao utilizar nossos aplicativos, você também concorda com os termos dessa política.`,
    },
    {
        title: "11. Alterações nestes Termos",
        content: `Podemos atualizar estes Termos de Uso periodicamente. Alterações relevantes serão comunicadas por meio de atualização desta página, com indicação da nova data de vigência. O uso continuado dos aplicativos após a publicação das alterações constitui aceitação dos novos termos.`,
    },
    {
        title: "12. Lei Aplicável e Foro",
        content: `Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Belo Horizonte, Estado de Minas Gerais, para dirimir quaisquer controvérsias decorrentes deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
    },
    {
        title: "13. Contato",
        content: `Dúvidas sobre estes Termos de Uso? Fale conosco:\n\nE-mail: roberto@cobiapps.com`,
    },
];

export default function Termos() {
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
                            <ScrollText className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Legal</p>
                            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>Termos de Uso</h1>
                        </div>
                    </div>

                    <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
                        Última atualização: 21 de maio de 2026
                    </p>

                    <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: 'var(--muted)' }}>
                        Estes Termos de Uso estabelecem as condições para utilização dos aplicativos desenvolvidos pela Cobiapps. Leia com atenção antes de usar nossos produtos.
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
                            <Link href="/privacidade" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Privacidade</Link>
                            <a href="mailto:roberto@cobiapps.com" className="text-xs hover:opacity-70 transition-opacity" style={{ color: 'var(--muted)' }}>Contato</a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}
