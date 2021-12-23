import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./FooterCTA.module.css";

function FooterCTA() {
    return(
        <header className={styles['footer-cta']}>
            <h4>Boost your links today</h4>
            <div>
                <Button isPrimary={true}>Get Started</Button>
            </div>
        </header>
    );
};

export default FooterCTA;