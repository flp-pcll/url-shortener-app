import React from "react";
import Link from "../../UI/Link/Link";
import styles from "./FooterNavLinks.module.css";

function FooterNavLinks(props) {
    console.log(props.links);

    const linksList = props.links.map(item => {
        return(
            <li key={item.id}>
                <Link href={item.to}> {item.title} </Link>
            </li>
        );
    });
    return(
        <ul className={`${styles['footer-nav-links_list']} ${props.className}`}>
            {linksList}
        </ul>
    );
};

export default FooterNavLinks;