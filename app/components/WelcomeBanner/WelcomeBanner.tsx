import Image from 'next/image';
import { LinkButton } from '../LinkButton/LinkButton';
import styles from './WelcomeBanner.module.scss';

export const WelcomeBanner = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.header}>
                    Razem stworzymy Twoją
                    <br /> <span>wymarzoną stronę</span>
                </h1>
                <p className={styles.paragraph}>
                    Stwórz własną markę - nie pozwól, aby ograniczała Cię
                    technologia.
                </p>
                <div className={styles.buttons}>
                    <LinkButton href={'/'}>Dowiedz się więcej</LinkButton>
                    <LinkButton href={'/'}>Wyceń projekt</LinkButton>
                </div>

                <div className={`${styles.ornament} ${styles.ornament1}`}>
                    <Image
                        alt="ornament"
                        src={'/elipse_blue.svg'}
                        width={800}
                        height={900}
                        priority
                    />
                </div>
                <div className={`${styles.ornament} ${styles.ornament2}`}>
                    <Image
                        alt="ornament"
                        src={'/elipse_magenta.svg'}
                        width={800}
                        height={900}
                        priority
                    />
                </div>
                <div className={`${styles.ornament} ${styles.ornament3}`}>
                    <Image
                        alt="ornament"
                        src={'/elipse_blue.svg'}
                        width={650}
                        height={800}
                        priority
                    />
                </div>
                <div className={`${styles.ornament} ${styles.ornament4}`}>
                    <Image
                        alt="ornament"
                        src={'/elipse_magenta.svg'}
                        width={700}
                        height={700}
                        priority
                    />
                </div>
            </div>
        </header>
    );
};
