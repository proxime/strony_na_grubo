'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollFollowLine.module.scss';

export interface ScrollFollowLineProps {
    maxHeight: number;
}

export const ScrollFollowLine = ({ maxHeight }: ScrollFollowLineProps) => {
    const [lineHeight, setLineHeight] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (wrapperRef.current) {
                const { top, y } = wrapperRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const offset = windowHeight / 1.5;

                if (top < offset) {
                    const height = Math.abs(y - offset);
                    height > maxHeight
                        ? setLineHeight(maxHeight)
                        : setLineHeight(height);
                } else {
                    setLineHeight(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={styles.wrapper}
            style={{
                height: `${maxHeight}px`,
            }}
        >
            <div
                className={styles.line}
                style={{
                    height: `${lineHeight}px`,
                }}
            />
        </div>
    );
};
