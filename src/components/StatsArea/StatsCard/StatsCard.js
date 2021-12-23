import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./StatsCard.module.css";

function StatsCard(props) {
    return (
        <Card className={`${styles['stats-card']} ${props.className}`} id={props.id}>
            <span className={styles['stats-card_icon']} title="card icon">{props.icon}</span>
            <span className={styles['stats-card_text-area']}>
                <header>
                    <h3>{props.title}</h3>
                </header>
                <span>
                    <p>{props.description}</p>
                </span>
            </span>
        </Card>
    );
};

export default StatsCard;