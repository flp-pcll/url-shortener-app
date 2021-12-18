import React, { useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import Button from "../../UI/Button/Button";
import styles from "./MobileMenuIcon.module.css";

function MobileMenuIcon(props) {
    const [menuIsClicked, setMenuIsClicked] = useState(() => false);

    const iconClickHandler = event => {
        event.preventDefault();
        setMenuIsClicked(prevState => !prevState);
    };

    return (
        <div onClick={iconClickHandler} className={`${styles['mobile-btn_container']} ${props.className}`}>
            <Button className={styles['mobile-icon_btn']}>
                {menuIsClicked && <GoX className={styles['mobile-icon']} />}
                {!menuIsClicked && <GoThreeBars className={styles['mobile-icon']} /> }
            </Button>
        </div>
    );
};

export default MobileMenuIcon;