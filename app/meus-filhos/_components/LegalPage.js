import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Shell from './Shell';
import { LAST_UPDATED } from './config';

export function LegalSection({ title, children }) {
    return (
        <section className="rounded-2xl p-7 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>{title}</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {children}
            </div>
        </section>
    );
}

export function List({ items }) {
    return (
        <ul className="flex flex-col gap-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: 'var(--accent)' }} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export function A({ href, children }) {
    const external = href.startsWith('mailto:') || href.startsWith('http');
    const className = "underline underline-offset-2 hover:opacity-70 transition-opacity";
    const style = { color: 'var(--accent)' };
    return external
        ? <a href={href} className={className} style={style} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>
        : <Link href={href} className={className} style={style}>{children}</Link>;
}

export default function LegalPage({ icon, title, intro, children }) {
    return (
        <Shell>
            <main className="max-w-4xl mx-auto px-5 lg:px-8 py-12 md:py-20">
                <Link href="/meus-filhos" className="inline-flex items-center gap-1.5 text-sm mb-10 hover:opacity-70 transition-opacity" style={{ color: 'var(--accent)' }}>
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para o Meus Filhos
                </Link>

                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                        {icon}
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Meus Filhos</p>
                        <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--foreground)' }}>{title}</h1>
                    </div>
                </div>

                <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
                    Última atualização: {LAST_UPDATED}
                </p>

                <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: 'var(--muted)' }}>
                    {intro}
                </p>

                <div className="flex flex-col gap-10">
                    {children}
                </div>
            </main>
        </Shell>
    );
}
