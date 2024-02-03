import styles from './Section.module.scss';

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
    return (
        <section
            id={id}
            className={`${styles.wrapper} ${isReversed ? styles.wrapperReversed : ''}`}
        >
            {isReversed && children}
            <div className={contentClassName}>
                <h4 className={styles.header}>{title}</h4>
                <div className={styles.paragraph}>{content}</div>
            </div>
            {!isReversed && children}
        </section>
    );
};
