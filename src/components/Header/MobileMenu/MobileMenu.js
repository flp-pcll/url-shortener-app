import React from "react";
import Card from "../../UI/Card/Card"
import Modal from "../../UI/Modal/Modal";
import NavActions from "../NavActions/NavActions";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./MobileMenu.module.css";

function MobileMenu(props) {
    return (
        <Card {...props} className={styles['mobile-menu-card']}>
            <Modal className={styles['mobile-menu-card']}>
                <NavLinks className={styles['links-list']} />
                <NavActions className={styles['nav-actions']} />
            </Modal>
        </Card>
    )
}

export default MobileMenu;