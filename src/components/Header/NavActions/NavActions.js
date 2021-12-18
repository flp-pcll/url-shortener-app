import React from "react";
import Button from "../../UI/Button/Button";
import Link from "../../UI/Link/Link";
import styles from "./NavActions.module.css";

function NavActions() {

    return(
        <ul className={styles['nav-actions']} title="Navigation Action Items">
            <li title="Login">
                <Link href="/"> Login </Link>
            </li>
            <li title="Sign up button">
                <Button>Sign Up</Button>
            </li>
        </ul>
    );
};

export default NavActions;