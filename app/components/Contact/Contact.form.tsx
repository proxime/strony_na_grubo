'use client';

import { montserrat } from '@/app/assets/fonts';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const ContactForm = () => {
    const {
        formState: { errors, isSubmitted, isValid },
        handleSubmit,
        register,
        setError,
    } = useForm<ContactFormValues>({
        resolver: yupResolver(ContactFormSchema),
    });

    const handleFormSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formRow}>
                Cześć, nazywam się{' '}
                <input
                    {...register('name')}
                    className={montserrat.className}
                    type="text"
                    placeholder="Imię i nazwisko"
                    data-error={!!errors.name}
                />
                , jestem zainteresowany/a{' '}
                <input
                    {...register('topic')}
                    type="text"
                    placeholder="Wybierz temat"
                    className={`${styles.largeInput} ${montserrat.className}`}
                    data-error={!!errors.topic}
                />
            </div>
            <div className={styles.formRow}>
                Mój adres email to{' '}
                <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className={montserrat.className}
                    data-error={!!errors.email}
                />
                , dodatkowo chciałbym/chciałabym dodać:
            </div>

            <textarea
                {...register('message')}
                placeholder="Twoja wiadomość"
                maxLength={5000}
                className={montserrat.className}
                data-error={!!errors.message}
            />

            <div className={styles.summary}>
                <label className={styles.checkboxWrapper}>
                    <input {...register('terms')} type="checkbox" hidden />
                    <div
                        className={styles.checkboxLabel}
                        data-error={!!errors.terms}
                    >
                        <Image
                            alt="tick"
                            src={'/tick_white.svg'}
                            width={16}
                            height={16}
                        />
                    </div>
                    <p>
                        Zgadzam się na przetwarzanie danych osobowych na
                        potrzeby formularza
                    </p>
                </label>

                <button className={styles.button}>Wyślij wiadomość</button>
            </div>
        </form>
    );
};

const ContactFormSchema = yup.object({
    email: yup
        .string()
        .email('Podaj prawidłowy adres email')
        .required('Wprowadź adres email'),
    name: yup.string().trim().required('Wprowadź imię i nazwisko'),
    topic: yup.string().trim().required('Wybierz temat'),
    message: yup
        .string()
        .trim()
        .max(5000, 'Wiadomość za długa')
        .required('Wprowadź wiadomość'),
    terms: yup.boolean().required().isTrue('Zgoda jest wymagana'),
});

export type ContactFormValues = yup.InferType<typeof ContactFormSchema>;
