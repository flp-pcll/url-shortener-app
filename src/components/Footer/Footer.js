import React from "react";
import FooterCTA from "./FooterCTA/FooterCTA";
import FooterNav from "./FooterNav/FooterNav";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <footer className={styles['footer-wrapper']}>
                <FooterCTA />
                <FooterNav />
        </footer>
    );
};

export default Footer;