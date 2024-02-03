'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollFollowLine.module.scss';

export interface ScrollFollowLineProps {
    maxHeight: number;
    position: {
        x: number;
        y: number;
    };
}

export const ScrollFollowLine = ({
    maxHeight,
    position,
}: ScrollFollowLineProps) => {
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
                left: `${position.x}px`,
                top: `${position.y}px`,
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
