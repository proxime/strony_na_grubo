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
                    Jestśmy doświadczonymi twórcami stron internetowych z{' '}
                    <span>pięcioletnim doświadczeniem</span>, z pasją do
                    najnowszych technologii. Naszą misją jest nie tylko
                    tworzenie estetycznych i funkcjonalnych witryn, ale także
                    dostarczanie innowacyjnych rozwiązań. Sprawiają one, że
                    strony są przyjemne dla oka, a także efektywne i zgodne z
                    najnowszymi standardami technologicznymi.
                    <br />
                    <br /> Od projektowania responsywnych interfejsów po
                    integrację zaawansowanych funkcji, jesteśmy gotowi sprostać
                    wszelkim wyzwaniom. W naszej pracy{' '}
                    <span>
                        kładziemy nacisk na zrealizowanie Twoich celów
                        biznesowych
                    </span>
                    , personalizację i unikalność, dostosowując każdy projekt do
                    indywidualnych potrzeb Klienta. Zawsze poszukujemy nowych
                    rozwiązań, aby dostarczyć strony internetowe, które nie
                    tylko spełniają oczekiwania, ale również przewyższają je.{' '}
                    <br />
                    <br /> Dzięki doświadczeniu, zdobytemu w dynamicznym
                    środowisku projektowania stron internetowych, możemy
                    zrealizować każdy projekt z profesjonalizmem i
                    kreatywnością.{' '}
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
