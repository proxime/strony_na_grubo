import Image from 'next/image';
import styles from './TechnologiesSection.module.scss';
import { Section } from '../Section/Section';

export const TechnologiesSection = () => {
    return (
        <Section
            id="technologies"
            contentClassName={styles.content}
            title="Postaw na najlepsze technologie"
            content={
                <>
                    Odkryj potęgę najnowszych technologii. Zostaw swoją
                    konkurencję w tyle, dzięki wydajnej stronie internetowej.{' '}
                    <span> Gwarantujemy wyjątkową jakość i efektywność.</span> Z
                    nami Twoja strona internetowa będzie nie tylko funkcjonalna,
                    ale także zoptymalizowana i gotowa na przyszłość.
                </>
            }
        >
            <div className={styles.imageWrapper}>
                <Image
                    alt="technologies"
                    src={'/technologies.svg'}
                    width={0}
                    height={0}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </Section>
    );
};
