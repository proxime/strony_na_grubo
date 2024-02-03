import Image from 'next/image';
import styles from './ProjectSteps.module.scss';

export type ProjectStep = {
    title: string;
    description: string;
};

export interface ProjectStepsProps {
    steps: ProjectStep[];
}

export const ProjectSteps = ({ steps }: ProjectStepsProps) => {
    return (
        <div>
            <ul className={styles.list}>
                {steps.map((step, index) => (
                    <li className={styles.listItem} key={index}>
                        <div className={styles.imageWrapper}>
                            <Image
                                alt="tick"
                                src={`/tick.svg`}
                                width={34}
                                height={34}
                            />
                        </div>
                        <div>
                            <h5 className={styles.itemHeader}>{step.title}</h5>
                            <p>{step.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
