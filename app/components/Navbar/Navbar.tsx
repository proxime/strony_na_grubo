import Image from 'next/image';
import styles from './Navbar.module.scss';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <Link href={'#'} className={styles.logo}>
                    <Image
                        alt="logo"
                        src={'/logo.svg'}
                        width={61}
                        height={52}
                        priority
                    />
                </Link>

                <ul className={styles.links}>
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
            </div>
        </nav>
    );
};
