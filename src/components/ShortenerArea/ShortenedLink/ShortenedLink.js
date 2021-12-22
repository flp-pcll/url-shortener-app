import React, { useState, useEffect, useCallback } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Spinner from "../../UI/Spinner/Spinner";
import styles from "./ShortenedLink.module.css";

function ShortenedLink(props) {

    const [copyURL, setCopyURL] = useState(false);

    const copyURLToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(props.shortenedURL);
            console.log(`${props.shortenedURL} was coppied to the clipboard`);
        } catch (error) {
            console.log(error);
        }
    }, [props.shortenedURL]);

        const buttonClickHandler = event => {
            event.preventDefault();
            setCopyURL(true);
        };

        useEffect(() => {
            copyURLToClipboard();
        }, [copyURLToClipboard, copyURL]);

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
                    <div className={`${styles['shortened-link_controls-area']}`} name="Controls Area">
                        <Button className={`${copyURL && styles['copied-content']}`} type="button" onClick={buttonClickHandler}>
                            {!copyURL && "Copy"}
                            {copyURL && "Copied!"}
                        </Button>
                    </div>
                </Card>
            </li>
        );
    };

    export default ShortenedLink;