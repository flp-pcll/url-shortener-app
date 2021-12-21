import React from "react";
import ShortenedLink from "../ShortenedLink/ShortenedLink";
import styles from "./ShortenedLinksList.module.css";

function ShortenedLinksList(props) {
    const links = props.linksList.map(item => {
        return (
            <ShortenedLink key={item.id}
                id={item.id}
                originalURL={item.originalURL}
                shortenedURL={item.shortenedURL}
            />
        );
    });
    return (
        <ul className={styles['shortened-links_list-area']}>
            {links}
        </ul>
    );
};

export default ShortenedLinksList;