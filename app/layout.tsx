import type { Metadata } from 'next';
import { montserrat } from '@assets/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@styles/globals.css';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Strony Na Grubo',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />

                <SpeedInsights />
            </body>
        </html>
    );
}
