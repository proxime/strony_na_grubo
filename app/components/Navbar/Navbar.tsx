import Image from 'next/image';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image
                        alt="logo"
                        src={'/logo.svg'}
                        width={61}
                        height={52}
                        priority
                    />
                </div>

                <ul className={styles.links}>
                    <li>
                        <a href="/">O nas</a>
                    </li>
                    <li>
                        <a href="/about">Oferta</a>
                    </li>
                    <li>
                        <a href="/contact">Cennik</a>
                    </li>
                    <li>
                        <a href="/contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
