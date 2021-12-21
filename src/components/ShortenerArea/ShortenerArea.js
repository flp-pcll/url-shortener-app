import React, { useState, useEffect } from "react";
import ShortenerForm from "./ShortenerForm/ShortenerForm";
import styles from "./ShortenerArea.module.css";

function ShortenerArea() {
    const [shortenedLinkItems, setShortenedLinkItems] = useState(() => {
        const storedLinksList = window.localStorage.getItem('linkItems');
        return JSON.parse(storedLinksList) || [];
    });

    const getLinkObjectHandler = linkObj => {
        setShortenedLinkItems(prevList => {
            const newList = [...prevList];
            newList.unshift(linkObj);
            return newList;
        });
    };

    useEffect(() => {
        const linkItemsJSON = JSON.stringify(shortenedLinkItems);
        window.localStorage.setItem('linkItems', linkItemsJSON);
    }, [shortenedLinkItems]);

    return(
        <section className={styles['shortener-area']}>
            <ShortenerForm onHttpRequest={getLinkObjectHandler} />
            <div>List</div>
        </section>
    );
};

export default ShortenerArea;