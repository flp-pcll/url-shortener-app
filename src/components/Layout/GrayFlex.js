import React from "react";
import styles from "./GrayFlex.module.css";

function GrayFlex(props) {
    return (
    <span className={styles['gray-bg_area']}>
        {props.children}
    </span>);
};

export default GrayFlex;

