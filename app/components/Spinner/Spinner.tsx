import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
        </div>
    );
};
