import React from "react";
import styles from "./MainFlex.module.css";

function MainFlex({children, title}) {
    return (
        <main className={styles['main-flex']} title={title}>{children}</main>
    );
};

export default MainFlex;