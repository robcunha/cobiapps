import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Cobiapps - Aplicativos Android Simples e Eficientes",
    description: "A Cobiapps desenvolve aplicativos simples e eficientes para facilitar a vida dos usuários Android. Calculadoras, cronômetros, gravadores e muito mais.",
    keywords: "aplicativos android, calculadora, cronômetro, gravador de voz, utilitários android, ferramentas android",
    openGraph: {
        title: "Cobiapps - Aplicativos Android",
        description: "Aplicativos simples e eficientes para Android",
        type: "website",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
            >
                {children}
            </body>
        </html>
    );
}
