import styles from './BuildYourPageSection.module.scss';
import { Section } from '../Section/Section';
import { ProjectSteps } from '../ProjectSteps/ProjectSteps';
import { projectStepsData } from './BuildYourPageSection.data';
import { LinkButton } from '../LinkButton/LinkButton';
import { WebAnimation } from '../WebAnimation/WebAnimation';
import { ScrollFollowLine } from '../ScrollFollowLine/ScrollFollowLine';

export const BuildYourPageSection = () => {
    return (
        <Section
            id="oferta"
            title="Zbuduj nowoczesną stronę z użyciem Next.js"
            content={
                <>
                    Next.js, stworzony przez renomowaną firmę Vercel, to wiodący
                    framework JavaScript do tworzenia aplikacji webowych. W
                    dzisiejszym cyfrowym świecie, gdzie szybkość i wydajność są
                    kluczowe, Next.js ustanawia standardy w dziedzinie rozwoju
                    aplikacji webowych.
                    <br />
                    <br /> Użytkownicy przeglądają internet głównie przy pomocy
                    urządzeń mobilnych, oczekują natychmiastowego dostępu do
                    informacji. Każda dodatkowa sekunda ładowania strony może
                    prowadzić do utraty potencjalnych klientów. W tym
                    kontekście, <span>
                        optymalizacja szybkości ładowania
                    </span>{' '}
                    staje się nie tyle luksusem, co koniecznością.
                    <div className={styles.buttonWrapper}>
                        <LinkButton href={'#cennik'}>Wyceń projekt</LinkButton>
                    </div>
                    <div className={styles.animationWrapper}>
                        <WebAnimation />
                    </div>
                </>
            }
        >
            <div className={styles.stepsWrapper}>
                <ProjectSteps steps={projectStepsData} />
                <div className={styles.lineWrapper}>
                    <ScrollFollowLine maxHeight={1250} />
                </div>
            </div>
        </Section>
    );
};
