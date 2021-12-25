import React, { useState, useEffect } from "react";

import LogoArea from "./LogoArea/LogoArea";
import NavActions from "./NavActions/NavActions";
import NavLinks from "./NavLinks/NavLinks";
import MobileMenuIcon from "./MobileMenuIcon/MobileMenuIcon";

import styles from "./HeaderArea.module.css";


function Header() {
    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        const windowResizeHandler = () => setWindowWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', windowResizeHandler);
        return () => window.removeEventListener('resize', windowResizeHandler);
    }, [windowWidth]);


    console.log(document.documentElement.clientWidth);
    return (
        <header className={styles['page-header_area']}>
            <nav className={styles['top-navigation_container']}>
                <section className={styles['logo-area']} id="logoArea" title="Shortly Logo Area">
                    <LogoArea href="/" />
                </section>
                <section className={styles['nav-content']} title="Shortly Navigation Links">
                    {windowWidth > 1000 && 
                    <React.Fragment>
                        <NavLinks />
                        <NavActions />
                    </React.Fragment>}

                    {windowWidth < 1000 && <MobileMenuIcon />}
                </section>
            </nav>
        </header>
    );
};

export default Header;