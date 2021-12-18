import React from "react";
import styles from "./Button.module.css";

function Button({isPrimary, className, children, type, onClick}) {
    const buttonClasses = `${styles['button']} ${isPrimary ? styles['primary-btn'] : styles['copy-btn']}`

    return (
        <button className={`${buttonClasses} ${className}`} type={type} onClick={onClick}> {children} </button>
    );
};

export default Button;