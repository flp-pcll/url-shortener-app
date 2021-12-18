import React from "react";
import styles from "./Button.module.css";

function Button({children, type, onClick}) {
    return (
        <button className={styles['button']} type={type} onClick={onClick}> {children} </button>
    );
};

export default Button;