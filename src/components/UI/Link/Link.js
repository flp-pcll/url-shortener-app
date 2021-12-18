import React from "react";
import styles from "./Link.module.css";

function Link({href, children, onClick}) {
    return(
        <a className={styles['link']} href={href} onClick={onClick}> {children} </a>
    );
};

export default Link;