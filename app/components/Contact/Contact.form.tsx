'use client';

import { montserrat } from '@/app/assets/fonts';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { useController, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { topicOptions } from './Contact.data';
import { SelectField } from '../SelectField/SelectField';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const ContactForm = () => {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');

    const {
        formState: { errors },
        handleSubmit,
        register,
        control,
        setValue,
    } = useForm<ContactFormValues>({
        resolver: yupResolver(ContactFormSchema),
    });

    const { field: topicField } = useController({
        control,
        name: 'topic',
    });

    const handleFormSubmit = handleSubmit((data) => {
        console.log(data);
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
    terms: yup.boolean().required().isTrue('Zgoda jest wymagana'),
});

export type ContactFormValues = yup.InferType<typeof ContactFormSchema>;
