import React from "react";
import { GoThreeBars } from "react-icons/go";
import Button from "../../UI/Button/Button";
import styles from "./MobileMenuIcon.module.css";

function Burger(props) {
    return (
        <div className={`${styles['mobile-btn_container']} ${props.className}`}>
            <Button className={styles['mobile-icon_btn']}>
                <GoThreeBars className={styles['burger-icon']} />
            </Button>
        </div>
    );
};

export default Burger;