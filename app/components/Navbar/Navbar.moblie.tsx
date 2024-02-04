'use client';

import Image from 'next/image';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const NavbarMobile = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <Link href={'#'} className={styles.logo} onClick={handleClose}>
                    <Image
                        alt="logo"
                        src={'/logo.svg'}
                        width={61}
                        height={52}
                        priority
                    />
                </Link>

                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setOpen((prevValue) => !prevValue)}
                >
                    {open ? (
                        <Image
                            alt="close"
                            src={'/close.svg'}
                            width={32}
                            height={32}
                        />
                    ) : (
                        <Image
                            alt="menu"
                            src={'/menu.svg'}
                            width={24}
                            height={24}
                            priority
                        />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.mobileMenu}
                        onClick={handleClose}
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: '100vh',
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            bounce: false,
                        }}
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
