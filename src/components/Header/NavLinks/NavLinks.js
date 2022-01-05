import React from "react";
import Link from "../../UI/Link/Link";
import styles from "./NavLinks.module.css";

function NavLinks(props) {
    return(
        <ul className={ `${styles['nav-links']} ${props.className}` } title="Navigation Links">
            <li title="Navigation Link Item">
                <Link href="/"> Features </Link>
            </li>
            <li title="Navigation Link Item">
                <Link href="/"> Pricing </Link>
            </li>
            <li title="Navigation Link Item">
                <Link href="/"> Resources </Link>
            </li>
        </ul>
    );
};

export default NavLinks;