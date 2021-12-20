import React from "react";
import styles from "./Input.module.css";

function Input(props) {    
    return (
        <input
            className={`${styles['input']} ${props.className}`}
            type={props.type}
            id={props.id}
            aria-label={props.ariaLabel}
            placeholder={props.placeholder}
            onClick={props.onClick}
            onChange={props.onChange}>
            {props.children}
        </input>
    );
};

export default Input;