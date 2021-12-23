import React from "react";
import styles from "./StatsHeader.module.css";

function StatsHeader() {
    return(
        <header className={styles['stats-header']}>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistic dashboard. </p>
        </header>
    );
};

export default StatsHeader;