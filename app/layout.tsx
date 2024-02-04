import type { Metadata } from 'next';
import { montserrat } from '@assets/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from './components/Footer/Footer';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import '@styles/globals.css';

const Navbar = dynamic(() => import('@components/Navbar/Navbar'), {
    ssr: false,
});

export const metadata: Metadata = {
    metadataBase: new URL('https://stronynagrubo.pl'),
    title: 'Strony Na Grubo - Wydajne strony internetowe w Next.js',
    description:
        'Tworzymy nowoczesne i wydajne strony internetowych przy pomocy najlepszych technologii, takich jak Next.js',
    keywords:
        'tworzenie stron internetowych, jak zrobić stronę, strona internetowa, strona wizytówkowa, strona internetowa cena, sklep internetowy',
    category: 'tworzenie stron internetowych',
    creator: 'Strony Na Grubo',
    openGraph: {
        images: '/banner.JPG',
        type: 'website',
        locale: 'pl_PL',
        url: 'https://stronynagrubo.pl',
        siteName: 'Strony Na Grubo',
        title: 'Strony Na Grubo - Wydajne strony internetowe w Next.js',
        description:
            'Tworzymy nowoczesne i wydajne strony internetowych przy pomocy najlepszych technologii, takich jak Next.js',
    },
    twitter: {
        images: '/banner.JPG',
        card: 'summary_large_image',
        siteId: 'https://stronynagrubo.pl',
        title: 'Strony Na Grubo - Wydajne strony internetowe w Next.js',
        description:
            'Tworzymy nowoczesne i wydajne strony internetowych przy pomocy najlepszych technologii, takich jak Next.js',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={montserrat.className}>
                <Suspense fallback={null}>
                    <Navbar />
                </Suspense>
                {children}
                <Footer />

                <SpeedInsights />
            </body>
        </html>
    );
}
