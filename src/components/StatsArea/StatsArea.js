import React from "react";
import StatsHeader from "./StatsHeader/StatsHeader";
import StatsCardsList from "./StatsCardsList/StatsCardsList";
import { ReactComponent as BrandRecognitionIcon } from "../../assets/images/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecordsIcon } from "../../assets/images/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizable } from "../../assets/images/icon-fully-customizable.svg";
import styles from "./StatsArea.module.css";

function StatsArea() {
    const cardsItems = [
        {
            id: '001',
            title: 'Brand Recognition',
            description: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
            icon: <BrandRecognitionIcon />
        },
        {
            id: '002',
            title: 'Detailed Records',
            description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
            icon: <DetailedRecordsIcon />
        },
        {
            id: '003',
            title: 'Fully Customizable',
            description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
            icon: <FullyCustomizable />
        }
    ];

    return(
        <section className={styles['stats-cards_area']}>
            <StatsHeader />
            <StatsCardsList cardsInfo={cardsItems} />
        </section>
    );
};

export default StatsArea;