import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import styles from "./Modal.module.css";

function Backdrop(props) {
    return(
        <div onClick={props.onClick} className={styles['modal-backdrop']} name="Modal Backdrop"></div>
    )
};

function ModalOverlay(props) {
    const classes = props.isModalOpen ? `${styles['modal-open']} ${styles['modal-overlay']}` : `${styles['modal-overlay']}`;
    return(
        <div className={`${classes} ${props.className}`} name="Modal Area">
            <Card className={styles['modal-card']}>
            {props.children}
            </Card>
        </div>
    );
};

function Modal(props) {
    const modalArea = document.getElementById('overlays');
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ModalOverlay {...props}>{props.children}</ModalOverlay>, modalArea)}
        </React.Fragment>
    );
};

export default Modal;