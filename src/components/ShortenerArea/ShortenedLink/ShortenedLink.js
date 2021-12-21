import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./ShortenedLink.module.css";

function ShortenedLink(props) {
    return (
        <li className={styles['shortened-link_container']} id={props.id}>
            <Card className={styles['shortened-link_container--card']}>
                <section className={styles['shortened-link_links-area']} name="Links Area">
                    <span className={styles['original-link_container']}>
                        <p className={styles['shortened-link__originalURL']}>
                            {props.originalURL.length > 40 && `${props.originalURL.substr(0, 40)}...`}
                            {props.originalURL.length < 40 && `${props.originalURL}`}
                        </p>
                    </span>
                    <span className={styles['shortened-link-area']}><p>{props.shortenedURL}</p></span>
                </section>
                <div className={styles['shortened-link_controls-area']} name="Controls Area">
                    <Button>Copy</Button>
                </div>
            </Card>
        </li>
    );
};

export default ShortenedLink;