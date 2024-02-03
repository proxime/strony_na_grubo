'use client';

import Image from 'next/image';
import { LinkButton } from '../LinkButton/LinkButton';
import styles from './PriceCard.module.scss';
import { motion } from 'framer-motion';

export interface PriceCardProps {
    title: string;
    price: string;
    buttonGradient: string;
    options: string[];
    link: string;
}

export const PriceCard = ({
    title,
    price,
    options,
    buttonGradient,
    link,
}: PriceCardProps) => {
    return (
        <motion.div
            className={styles.wrapper}
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                bounce: false,
                ease: 'easeOut',
                duration: 0.3,
            }}
            viewport={{ once: true }}
        >
            <div className={styles.head}>
                <h6>{title}</h6>
                <p>
                    <sub>od</sub>
                    {price}
                    <sup>zł</sup>
                </p>
            </div>

            <ul className={styles.list}>
                {options.map((option, index) => (
                    <li key={index}>
                        <div>
                            <Image
                                alt="tick"
                                src={`/simple_tick.svg`}
                                width={30}
                                height={22}
                            />
                        </div>
                        <p>{option}</p>
                    </li>
                ))}
            </ul>

            <div className={styles.buttonWrapper}>
                <LinkButton
                    href={link}
                    style={{
                        background: `linear-gradient(${buttonGradient})`,
                    }}
                >
                    Wycena projektu
                </LinkButton>
            </div>
        </motion.div>
    );
};
