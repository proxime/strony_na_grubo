import Image from 'next/image';
import styles from './Footer.module.scss';

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
                        Jestśmy doświadczonymi twórcami stron internetowych z
                        pięcioletnim doświadczeniem, z pasją do najnowszych
                        technologii. Naszą misją jest nie tylko tworzenie
                        estetycznych i funkcjonalnych witryn, ale także
                        dostarczanie innowacyjnych rozwiązań. Sprawiają one, że
                        strony są przyjemne dla oka, a także efektywne i zgodne
                        z najnowszymi standardami technologicznymi.
                    </p>

                    <div className={styles.links}>
                        <ul className={styles.list}>
                            <li>Menu</li>
                            <li>O nas</li>
                            <li>Oferta</li>
                            <li>Cennik</li>
                            <li>Kontakt</li>
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
