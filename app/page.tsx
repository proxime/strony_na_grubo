import { WelcomeBanner } from '@components/WelcomeBanner/WelcomeBanner';
import { TechnologiesSection } from './components/TechnologiesSection/TechnologiesSection';
import { AboutUsSection } from './components/AboutUsSection/AboutUsSection';
import { BuildYourPageSection } from './components/BuildYourPageSection/BuildYourPageSection';
import { TrustedCompanies } from './components/TrustedCompanies/TrustedCompanies';
import { Prices } from './components/Prices/Prices';
import { Contact } from './components/Contact/Contact';
import dynamic from 'next/dynamic';

const StarBackground = dynamic(
    () => import('@components/StarBackground/StarBackground'),
    {
        ssr: false,
    },
);

export default function Home() {
    return (
        <main className="main">
            <WelcomeBanner />
            <TechnologiesSection />
            <AboutUsSection />
            <BuildYourPageSection />
            <TrustedCompanies />
            <Prices />
            <Contact />

            <StarBackground />
        </main>
    );
}
