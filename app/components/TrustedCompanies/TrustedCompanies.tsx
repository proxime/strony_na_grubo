import Image from 'next/image';
import styles from './TrustedCompanies.module.scss';

export const TrustedCompanies = () => {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.header}>
                Największe firmy na świecie już zaufały Next.js
            </h3>
            <div className={styles.companies}>
                <Image
                    alt="nvidia"
                    src={'/nvidia.svg'}
                    width={116}
                    height={90}
                />
                <Image alt="nike" src={'/nike.svg'} width={116} height={90} />
                <Image
                    alt="open ai"
                    src={'/openai.png'}
                    width={154}
                    height={38}
                />
                <Image
                    alt="netflix"
                    src={'/netflix.svg'}
                    width={170}
                    height={110}
                />
                <Image
                    alt="twitch"
                    src={'/twitch.svg'}
                    width={150}
                    height={54}
                />
            </div>
        </section>
    );
};
