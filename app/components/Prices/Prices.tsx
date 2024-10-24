import { PriceCard } from '../PriceCard/PriceCard';
import {
    commercePageOptions,
    extendedPageOptions,
    simplePageOptions,
} from './Prices.data';
import styles from './Prices.module.scss';

export const Prices = () => {
    return (
        <section id="cennik" className={styles.wrapper}>
            <h2 className={styles.header}>Cennik usług</h2>
            <div className={styles.cards}>
                <PriceCard
                    buttonGradient="90deg, #c62c50 0%, #a33c72 52.5%, #77458a 100%"
                    options={simplePageOptions}
                    price="2500"
                    title="Strona wizytówka"
                    link="?topic=basic#kontakt"
                />
                <PriceCard
                    buttonGradient="90deg, #3494b8 0%, #239e8c 100%"
                    options={extendedPageOptions}
                    price="4500"
                    title="Spersonalizowana strona"
                    link="?topic=extended#kontakt"
                />
                <PriceCard
                    buttonGradient="90deg, #ee493f 0%, #f6b04a 100%"
                    options={commercePageOptions}
                    price="9999"
                    title="E-commerce"
                    link="?topic=ecommerce#kontakt"
                />
            </div>
        </section>
    );
};
