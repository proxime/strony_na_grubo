import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerWrapper}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <Image
                            alt="logo"
                            src={'/logo.svg'}
                            width={61}
                            height={52}
                        />
                        <h2>Strony Na Grubo</h2>
                    </div>
                    <p>Adres-email</p>
                </div>

                <div className={styles.content}>
                    <p>
                        Jesteśmy twórcami stron internetowych z pięcioletnim
                        doświadczeniem. Naszą misją jest nie tylko tworzenie
                        estetycznych i funkcjonalnych witryn, ale także
                        dostarczanie innowacyjnych rozwiązań. Rozwiązania te
                        sprawiają, że strony są przyjemne dla oka, a także
                        efektywne i zgodne z najnowszymi standardami
                        technologicznymi.
                    </p>

                    <div className={styles.links}>
                        <ul className={styles.list}>
                            <li>Menu</li>
                            <li>
                                <Link href="#about-us">O nas</Link>
                            </li>
                            <li>
                                <Link href="#offer">Oferta</Link>
                            </li>
                            <li>
                                <Link href="#pricing">Cennik</Link>
                            </li>
                            <li>
                                <Link href="#contact">Kontakt</Link>
                            </li>
                        </ul>

                        <ul className={styles.list}>
                            <li>Usługi</li>
                            <li>Strona wizytówka</li>
                            <li>Spersonalizowana strona</li>
                            <li>E-commerce</li>
                            <li>Inne</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rights}>Strony Na Grubo &copy; 2024</div>
            </div>
        </footer>
    );
};
