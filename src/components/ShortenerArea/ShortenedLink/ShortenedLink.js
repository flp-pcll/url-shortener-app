import React, { useState, useEffect, useCallback } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./ShortenedLink.module.css";

function ShortenedLink(props) {
    const [copyURL, setCopyURL] = useState(false);
    const [urlIsCopied, setUrlIsCopied] = useState(false);

    const buttonClickHandler = event => {
        event.preventDefault();
        setCopyURL(true);
    };

    const copyURLToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(props.shortenedURL);
            console.log(`${props.shortenedURL} was coppied to the clipboard`);
            setUrlIsCopied(true);
        } catch (error) {
            console.log(error);
        }
    }, [props.shortenedURL]);

    useEffect(() => {
        copyURLToClipboard();
    }, [copyURLToClipboard, copyURL]);

    return (
        <li className={styles['shortened-link_container']} id={props.id}>
            <Card className={styles['shortened-link_container--card']}>
                <section className={styles['shortened-link_links-area']} name="Links Area">
                    <span className={styles['original-link_container']}>
                        <p className={styles['shortened-link__originalURL']}>
                            {props.originalURL.length > 60 && `${props.originalURL.substr(0, 60)}...`}
                            {props.originalURL.length < 60 && `${props.originalURL}`}
                        </p>
                    </span>
                    <span className={styles['shortened-link-area']}><p>{props.shortenedURL}</p></span>
                </section>
                <div className={`${styles['shortened-link_controls-area']}`} name="Controls Area">
                    <Button className={`${urlIsCopied && styles['copied-content']}`} type="button" onClick={buttonClickHandler}>
                        {!copyURL && "Copy"}
                        {urlIsCopied && "Copied!"}
                    </Button>
                </div>
            </Card>
        </li>
    );
};

export default ShortenedLink;