import React from "react";
import styles from "./PageWrapper.module.css";

function PageWrapper(props) {
    return (
    <div className={styles['page-wrapper']}>
        {props.children}
    </div>);
};

export default PageWrapper;

