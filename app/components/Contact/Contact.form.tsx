'use client';

import { montserrat } from '@/app/assets/fonts';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { useController, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { topicOptions } from './Contact.data';
import { SelectField } from '../SelectField/SelectField';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';

export const ContactForm = () => {
    const [sending, setSending] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');

    const {
        formState: { errors },
        handleSubmit,
        register,
        control,
        setValue,
        reset,
    } = useForm<ContactFormValues>({
        resolver: yupResolver(ContactFormSchema),
        defaultValues: {
            email: '',
            message: '',
            name: '',
            topic: undefined,
            terms: false,
        },
    });

    const { field: topicField } = useController({
        control,
        name: 'topic',
    });

    const handleFormSubmit = handleSubmit(async (data) => {
        setSending(true);
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message,
            topic: data.topic.value,
        };

        try {
            await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            reset();
            // @ts-expect-error ignore schema
            setValue('topic', null);
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 6000);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
        }
    });

    useEffect(() => {
        if (topic) {
            const value = topicOptions.find(({ value }) => value === topic);
            value && setValue('topic', value);
        }
    }, [topic]);

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
                <div className={styles.selectWrapper}>
                    <SelectField
                        options={topicOptions}
                        error={!!errors.topic}
                        onChange={(newValue) => topicField.onChange(newValue)}
                        value={topicField.value}
                        ref={topicField.ref}
                        placeholder="Wybierz temat"
                        instanceId={'topic-select'}
                        aria-label="Topic"
                    />
                </div>
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

            <div className={styles.messageWrapper}>
                <textarea
                    {...register('message')}
                    placeholder="Twoja wiadomość"
                    maxLength={5000}
                    className={montserrat.className}
                    data-error={!!errors.message}
                />

                {showNotification && (
                    <motion.div
                        className={styles.notification}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <Image
                            alt="success"
                            src={'/success.svg'}
                            width={32}
                            height={32}
                        />
                        Wiadomość została pomyślnie wysłana. Postaramy się
                        odpowiedzieć jak najszybciej to możliwe.
                    </motion.div>
                )}
            </div>

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

                <button disabled={sending} className={styles.button}>
                    {sending ? (
                        <>
                            <Spinner /> Wysyłanie
                        </>
                    ) : (
                        'Wyślij wiadomość'
                    )}
                </button>
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
    topic: yup
        .object({
            value: yup.string().required('Wybierz temat'),
            label: yup.string().required('Wybierz temat'),
        })
        .required('Wybierz temat'),
    message: yup
        .string()
        .trim()
        .max(5000, 'Wiadomość za długa')
        .required('Wprowadź wiadomość'),
    terms: yup.boolean().required().oneOf([true], 'Zgoda jest wymagana'),
});

export type ContactFormValues = yup.InferType<typeof ContactFormSchema>;
