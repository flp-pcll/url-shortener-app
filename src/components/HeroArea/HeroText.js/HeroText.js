import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./HeroText.module.css";

function HeroText() {
    return (
        <header className={styles['hero-text_container']}>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <div className={styles['hero-text_container__control']}>
                <Button type="button" isPrimary={true}>Get Started</Button>
            </div>
        </header>
    );
};

export default HeroText;