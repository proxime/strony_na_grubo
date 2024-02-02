import Link, { LinkProps } from 'next/link';
import styles from './LinkButton.module.scss';

export interface LinkButtonProps extends LinkProps {
    children: React.ReactNode;
}

export const LinkButton = ({ children, ...props }: LinkButtonProps) => {
    return (
        <Link {...props} className={styles.button}>
            {children}
        </Link>
    );
};
