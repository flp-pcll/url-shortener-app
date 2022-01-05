import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Backdrop(props) {
    return(
        <div onClick={props.onClick} className={styles['modal-backdrop']} name="Modal Backdrop"></div>
    )
};

function ModalOverlay(props) {
    return(
        <div className={`${styles['modal-overlay']} ${props.className}`} name="Modal Area">
            {props.children}
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