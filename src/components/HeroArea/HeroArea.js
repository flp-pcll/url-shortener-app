import React from "react";
import HeroImage from "./HeroImage/HeroImage";
import HeroText from "./HeroText.js/HeroText";

import styles from "./HeroArea.module.css";

function HeroArea() {
    return (
        <section className={styles['hero-area_section']}>
            <article className={styles['hero-area']}>
                <HeroText />
                <HeroImage />
            </article>
        </section>
    );
};

export default HeroArea;