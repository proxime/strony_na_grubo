import { WelcomeBanner } from '@components/WelcomeBanner/WelcomeBanner';
import { StarsCanvas } from './components/StarBackground/StarBackground';

export default function Home() {
    return (
        <main>
            <WelcomeBanner />
            <StarsCanvas />
        </main>
    );
}
