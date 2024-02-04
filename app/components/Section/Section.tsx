'use client';

import { useRef } from 'react';
import styles from './Section.module.scss';
import { motion } from 'framer-motion';

export interface SectionProps {
    children: React.ReactNode;
    title: string;
    content: React.ReactNode;
    isReversed?: boolean;
    contentClassName?: string;
    id?: string;
}

export const Section = ({
    children,
    content,
    title,
    isReversed,
    contentClassName,
    id,
}: SectionProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const childrenElement = (
        <motion.div
            initial={{
                opacity: 0,
                x: 150,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                bounce: false,
                ease: 'easeOut',
                duration: 0.5,
            }}
            viewport={{ once: true, margin: '-150px' }}
        >
            {children}
        </motion.div>
    );

    return (
        <section
            id={id}
            className={`${styles.wrapper} ${isReversed ? styles.wrapperReversed : ''}`}
            ref={wrapperRef}
        >
            {isReversed && childrenElement}
            <motion.div
                className={contentClassName}
                initial={{
                    opacity: 0,
                    y: 350,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    bounce: false,
                    ease: 'easeOut',
                    duration: 0.5,
                }}
                viewport={{ once: true }}
            >
                <h4 className={styles.header}>{title}</h4>
                <div className={styles.paragraph}>{content}</div>
            </motion.div>
            {!isReversed && childrenElement}
        </section>
    );
};
