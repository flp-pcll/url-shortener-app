import React from "react";
import styles from "./Link.module.css";

function Link(props) {
    return(
        <a className={`${styles['link']} ${props.className}`} href={props.href} onClick={props.onClick} {...props}> {props.children} </a>
    );
};

export default Link;