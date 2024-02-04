'use client';

import Image from 'next/image';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { NavbarMobile } from './Navbar.moblie';

export const Navbar = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)',
    });

    if (isMobile) return <NavbarMobile />;

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

export default Navbar;
