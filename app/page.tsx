import { WelcomeBanner } from '@components/WelcomeBanner/WelcomeBanner';
import { StarsCanvas } from './components/StarBackground/StarBackground';
import { TechnologiesSection } from './components/TechnologiesSection/TechnologiesSection';
import { AboutUsSection } from './components/AboutUsSection/AboutUsSection';
import { BuildYourPageSection } from './components/BuildYourPageSection/BuildYourPageSection';
import { TrustedCompanies } from './components/TrustedCompanies/TrustedCompanies';
import { Prices } from './components/Prices/Prices';
import { Contact } from './components/Contact/Contact';

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

            <StarsCanvas />
        </main>
    );
}
