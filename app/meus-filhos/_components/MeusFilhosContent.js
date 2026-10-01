'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, Check, Plus, Baby, CalendarDays, History, FolderOpen, Camera, Users, Cloud, LogIn, Tags,
    HeartPulse, GraduationCap, BookOpen, CalendarClock, FileText, StickyNote, Bell, Crown,
} from 'lucide-react';
import Shell from './Shell';
import { APP_STORE_URL, PLAY_STORE_URL, APP_ICON, CONTACT_EMAIL, BRAND_GRADIENT } from './config';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = '', id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
    return (
        <motion.section id={id} ref={ref} className={className} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={stagger}>
            {children}
        </motion.section>
    );
}

function SectionHeader({ eyebrow, title, description }) {
    return (
        <>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: 'var(--accent)' }}>{eyebrow}</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-5" style={{ color: 'var(--foreground)' }}>{title}</motion.h2>
            {description && (
                <motion.p variants={fadeUp} className="text-base md:text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: 'var(--muted)' }}>{description}</motion.p>
            )}
        </>
    );
}

function StoreButton({ store, url }) {
    const content = (
        <>
            <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wide opacity-80">{url ? 'Baixar na' : 'Em breve na'}</span>
                <span className="text-base font-semibold">{store}</span>
            </span>
        </>
    );
    const className = "flex items-center justify-center min-w-[170px] px-5 py-2.5 rounded-xl transition-all duration-200";
    if (!url) {
        return (
            <span className={`${className} cursor-default`} style={{ color: 'var(--muted)', background: 'var(--surface-alt)', border: '1px solid var(--border)' }} aria-disabled="true">
                {content}
            </span>
        );
    }
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`${className} text-white hover:opacity-90 active:scale-95`} style={{ background: '#0a0a0a', border: '1px solid #27272a' }}>
            {content}
        </a>
    );
}

function StoreButtons({ className = '' }) {
    return (
        <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
            <StoreButton store="App Store" url={APP_STORE_URL} />
            <StoreButton store="Google Play" url={PLAY_STORE_URL} />
        </div>
    );
}

const valueProps = [
    {
        icon: <CalendarDays className="w-6 h-6" />,
        title: "Saúde, escola e rotina em um só lugar",
        description: "Registre consultas, vacinas, provas e atividades. Tudo fica organizado no calendário e na linha do tempo.",
        color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40",
    },
    {
        icon: <FolderOpen className="w-6 h-6" />,
        title: "Documentos e memórias sempre à mão",
        description: "Guarde receitas, exames e a carteira de vacinação no celular, e também as fotos e os marcos que você nunca quer esquecer.",
        color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950/40",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Acompanhe junto com quem você ama",
        description: "Convide o outro responsável, os avós ou a babá para ver e adicionar informações. Todo mundo sabe de tudo, sem depender de mensagens.",
        color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/40",
    },
];

const features = [
    { icon: <Baby className="w-5 h-5" />, title: "Perfil de cada criança", description: "Data de nascimento com a idade em anos e meses, tipo sanguíneo, alergias, altura, peso, escola, pediatra e responsáveis." },
    { icon: <Tags className="w-5 h-5" />, title: "Eventos por categoria", description: "Cada registro tem uma categoria, com cor e ícone próprios, para você achar tudo com facilidade." },
    { icon: <CalendarDays className="w-5 h-5" />, title: "Calendário", description: "Os compromissos de cada criança organizados por dia." },
    { icon: <History className="w-5 h-5" />, title: "Linha do tempo", description: "O histórico de tudo o que foi registrado, do mais recente ao mais antigo." },
    { icon: <FileText className="w-5 h-5" />, title: "Documentos", description: "PDFs e imagens de receitas, exames, carteira de vacinação e o que mais precisar." },
    { icon: <Camera className="w-5 h-5" />, title: "Memórias", description: "Fotos e marcos como os primeiros passos, o primeiro dia de aula e os aniversários." },
    { icon: <Baby className="w-5 h-5" />, title: "Várias crianças", description: "Todos os seus filhos na mesma conta, com troca rápida entre eles." },
    { icon: <Users className="w-5 h-5" />, title: "Compartilhamento", description: "Convide pessoas por e-mail para acompanhar uma criança. Elas podem ver e adicionar informações." },
    { icon: <Cloud className="w-5 h-5" />, title: "Dados na nuvem", description: "Tudo sincronizado entre os seus aparelhos e entre as pessoas da família." },
    { icon: <LogIn className="w-5 h-5" />, title: "Entrada simples", description: "Entre com e-mail e senha ou use \"Continuar com Google\"." },
];

const categories = [
    { label: "Saúde", icon: <HeartPulse className="w-4 h-4" />, className: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" },
    { label: "Escola", icon: <GraduationCap className="w-4 h-4" />, className: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
    { label: "Curso", icon: <BookOpen className="w-4 h-4" />, className: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300" },
    { label: "Compromisso", icon: <CalendarClock className="w-4 h-4" />, className: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
    { label: "Memória", icon: <Camera className="w-4 h-4" />, className: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
    { label: "Documento", icon: <FileText className="w-4 h-4" />, className: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300" },
    { label: "Nota", icon: <StickyNote className="w-4 h-4" />, className: "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300" },
    { label: "Lembrete", icon: <Bell className="w-4 h-4" />, className: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
];

const plans = [
    {
        name: "Grátis",
        subtitle: "Para começar a organizar",
        items: ["1 criança", "Até 2 pessoas por criança", "Até 30 documentos", "Com anúncios"],
        highlighted: false,
    },
    {
        name: "Premium",
        subtitle: "Assinatura mensal ou anual",
        items: ["Sem anúncios", "Quantas crianças quiser", "Até 5 pessoas por criança", "Documentos sem limite", "Novos recursos Premium conforme forem lançados"],
        highlighted: true,
    },
];

const faqs = [
    {
        q: "É gratuito?",
        a: <>Sim. O plano Grátis permite cadastrar 1 criança, compartilhar com até 2 pessoas e guardar até 30 documentos, com anúncios. Se precisar de mais, você pode assinar o Premium, que tira os anúncios e amplia os limites.</>,
    },
    {
        q: "Posso compartilhar com o outro responsável?",
        a: <>Pode. O responsável principal convida outras pessoas por e-mail para acompanhar uma criança, como o outro responsável, os avós ou a babá. Os convidados podem ver e adicionar informações. Só o responsável principal pode convidar ou remover pessoas.</>,
    },
    {
        q: "Meus dados ficam seguros?",
        a: <>Seus dados ficam guardados na nuvem, ligados à sua conta, e só as pessoas que você convidar conseguem ver as informações de cada criança. Saiba mais na nossa <Link href="/meus-filhos/privacidade" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>Política de Privacidade</Link>.</>,
    },
    {
        q: "Como cancelo a assinatura?",
        a: <>A assinatura é feita pela App Store ou pela Google Play e renova automaticamente. Você pode cancelar a qualquer momento nas configurações de assinaturas da loja onde assinou. O Premium continua ativo até o fim do período já pago.</>,
    },
    {
        q: "Como excluo minha conta?",
        a: <>Envie um e-mail para <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>{CONTACT_EMAIL}</a> pedindo a exclusão. Veja o passo a passo e quais dados são apagados na página <Link href="/meus-filhos/excluir-conta" className="underline underline-offset-2" style={{ color: 'var(--accent)' }}>Excluir conta</Link>.</>,
    },
];

export default function MeusFilhosContent() {
    return (
        <Shell>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 md:py-28">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-20" style={{ background: '#3b82f6' }} />
                    <div className="absolute top-10 right-1/4 w-[380px] h-[380px] rounded-full blur-3xl opacity-15" style={{ background: '#ec4899' }} />
                </div>
                <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.span variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-6 bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                                Para iPhone e Android
                            </motion.span>
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ color: 'var(--foreground)' }}>
                                A história deles,{' '}
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: BRAND_GRADIENT }}>
                                    guardada com amor.
                                </span>
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--muted)' }}>
                                Diário digital e agenda dos seus filhos: saúde, escola, documentos e memórias, tudo organizado num só lugar.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <StoreButtons className="justify-center lg:justify-start" />
                            </motion.div>
                        </div>
                        <motion.div variants={fadeUp} className="flex-shrink-0">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[48px] overflow-hidden bg-white" style={{ boxShadow: '0 30px 80px rgba(168,85,247,0.25)' }}>
                                <Image src={APP_ICON} alt="Ícone do app Meus Filhos" width={256} height={256} className="w-full h-full object-cover" priority />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Proposta de valor */}
            <Section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <SectionHeader eyebrow="Por que usar" title="Mais tranquilidade para a família" description="Tudo o que você precisa saber sobre seus filhos, organizado e fácil de encontrar." />
                    <div className="grid md:grid-cols-3 gap-6">
                        {valueProps.map(v => (
                            <motion.div key={v.title} variants={fadeUp} className="p-7 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${v.bg} ${v.color}`}>{v.icon}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{v.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Funcionalidades */}
            <Section id="recursos" className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <SectionHeader eyebrow="Recursos" title="Tudo o que o app faz" />
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-14 mt-2">
                        {categories.map(c => (
                            <span key={c.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${c.className}`}>
                                {c.icon}{c.label}
                            </span>
                        ))}
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                        {features.map(f => (
                            <motion.div key={f.title} variants={fadeUp} className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>{f.icon}</div>
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{f.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{f.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Planos */}
            <Section id="planos" className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <SectionHeader eyebrow="Planos" title="Comece grátis" description="Use o plano Grátis o quanto quiser. Quando precisar de mais, assine o Premium." />
                    <div className="grid md:grid-cols-2 gap-6">
                        {plans.map(p => (
                            <motion.div
                                key={p.name}
                                variants={fadeUp}
                                className="relative p-7 rounded-2xl border-2"
                                style={{ background: 'var(--surface)', borderColor: p.highlighted ? '#a855f7' : 'var(--border)' }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    {p.highlighted && <Crown className="w-5 h-5 text-amber-500" />}
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>{p.name}</h3>
                                </div>
                                <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>{p.subtitle}</p>
                                <ul className="flex flex-col gap-3">
                                    {p.items.map(item => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--foreground)' }}>
                                            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ background: p.highlighted ? BRAND_GRADIENT : '#71717a' }}>
                                                <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p variants={fadeUp} className="text-xs text-center mt-8 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
                        O Premium é cobrado pela App Store ou pela Google Play, e os preços aparecem na loja do seu aparelho. Pode haver período de teste grátis. A assinatura renova automaticamente e pode ser cancelada a qualquer momento nas configurações da loja. Veja os <Link href="/meus-filhos/termos" className="underline underline-offset-2">Termos de Uso</Link>.
                    </motion.p>
                </div>
            </Section>

            {/* FAQ */}
            <Section id="duvidas" className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-5 lg:px-8">
                    <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes" />
                    <div className="flex flex-col gap-3 mt-4">
                        {faqs.map(f => (
                            <motion.details key={f.q} variants={fadeUp} className="group rounded-2xl border px-6 py-5" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold" style={{ color: 'var(--foreground)' }}>
                                    {f.q}
                                    <Plus className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-45" style={{ color: 'var(--muted)' }} />
                                </summary>
                                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--muted)' }}>{f.a}</p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
                    <motion.div variants={fadeUp} className="w-20 h-20 rounded-[22px] overflow-hidden mx-auto mb-8 bg-white" style={{ boxShadow: '0 20px 60px rgba(168,85,247,0.2)' }}>
                        <Image src={APP_ICON} alt="" width={80} height={80} className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--foreground)' }}>Comece a guardar essa história</motion.h2>
                    <motion.p variants={fadeUp} className="text-base md:text-lg mb-10 leading-relaxed" style={{ color: 'var(--muted)' }}>
                        Baixe o Meus Filhos e tenha a vida dos seus filhos organizada na palma da mão.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <StoreButtons className="justify-center" />
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-sm mt-10" style={{ color: 'var(--muted)' }}>
                        Ficou com alguma dúvida? Escreva para{' '}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1 underline underline-offset-2" style={{ color: 'var(--accent)' }}>
                            {CONTACT_EMAIL}<ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </motion.p>
                </div>
            </Section>
        </Shell>
    );
}
