import React from "react";
import WorkingImg from "../../../assets/images/illustration-working.svg";
import styles from "./HeroImage.module.css";

function HeroImage() {
    return (
        <div className={styles['hero-img-area']}>
            <img src={WorkingImg} alt="illustration"></img>
        </div>
    );
};

export default HeroImage;