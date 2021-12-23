import React from "react";
import StatsCard from "../StatsCard/StatsCard";
import styles from "./StatsCardsList.module.css";


function StatsCardsList({cardsInfo}) {
    const cards = cardsInfo.map(card => {
        return(
            <li key={card.id}>
                <StatsCard id={card.id} title={card.title} description={card.description} icon={card.icon} />
            </li>
        );
    });


    return(
        <ul className={styles['stats-cards_list-area']} title="stats cards">
            {cards}
        </ul>
    );
};

export default StatsCardsList;