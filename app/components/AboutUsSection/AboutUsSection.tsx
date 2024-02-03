import Image from 'next/image';
import { Section } from '../Section/Section';
import styles from './AboutUsSection.module.scss';

export const AboutUsSection = () => {
    return (
        <Section
            id="about-us"
            isReversed
            title="Kim jesteśmy?"
            content={
                <>
                    Jesteśmy twórcami stron internetowych z{' '}
                    <span>pięcioletnim doświadczeniem</span>. Naszą misją jest
                    nie tylko tworzenie estetycznych i funkcjonalnych witryn,
                    ale także dostarczanie innowacyjnych rozwiązań. Rozwiązania
                    te sprawiają, że strony są przyjemne dla oka, a także
                    efektywne i zgodne z najnowszymi standardami
                    technologicznymi.
                    <br />
                    <br /> Od projektowania responsywnych interfejsów po
                    integrację zaawansowanych funkcji, jesteśmy gotowi sprostać
                    wszelkim wyzwaniom. W naszej pracy{' '}
                    <span>
                        kładziemy nacisk na zrealizowanie Twoich celów
                        biznesowych
                    </span>
                    , personalizację i unikalność, dostosowując każdy projekt do
                    indywidualnych potrzeb. Zawsze poszukujemy nowych rozwiązań,
                    aby dostarczyć strony internetowe, które spełniają
                    oczekiwania naszych klientów. <br />
                    <br /> Dzięki zdobytemu doświadczeniu, możemy zrealizować
                    każdy projekt z profesjonalizmem i kreatywnością.{' '}
                    <span>
                        Pozwól nam zamienić Twoją wizję w stronę internetową.
                    </span>
                </>
            }
        >
            <div className={styles.imageWrapper}>
                <Image
                    alt="logo"
                    src={'/logo_outlined.svg'}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </Section>
    );
};
