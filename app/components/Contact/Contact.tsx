import { ContactForm } from './Contact.form';
import styles from './Contact.module.scss';

export const Contact = () => {
    return (
        <section id="contact" className={styles.wrapper}>
            <h2 className={styles.header}>Skontaktuj się z nami</h2>
            <ContactForm />
        </section>
    );
};
