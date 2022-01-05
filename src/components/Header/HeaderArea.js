import React, { useState, useEffect } from "react";

import LogoArea from "./LogoArea/LogoArea";
import NavActions from "./NavActions/NavActions";
import NavLinks from "./NavLinks/NavLinks";
import MobileMenuIcon from "./MobileMenuIcon/MobileMenuIcon";
import MobileMenu from "./MobileMenu/MobileMenu";

import styles from "./HeaderArea.module.css";


function Header() {
    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const windowResizeHandler = () => setWindowWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', windowResizeHandler);
        if(windowWidth > 1000) setIsModalOpen(false);
        return () => window.removeEventListener('resize', windowResizeHandler);
    }, [windowWidth]);

    const toggleMobileMenu = () => {
        setIsModalOpen(prevToggle => !prevToggle);
    };


    console.log(document.documentElement.clientWidth);
    return (
        <header className={styles['page-header_area']}>
            { isModalOpen && <MobileMenu></MobileMenu>}
            <nav className={styles['top-navigation_container']}>
                <section className={styles['logo-area']} id="logoArea" title="Shortly Logo Area">
                    <LogoArea href="/" />
                </section>
                <section className={styles['nav-content']} title="Shortly Navigation Links">
                    {windowWidth > 1000 && 
                    <React.Fragment>
                        <NavLinks className={styles['desktop-menu_links']} />
                        <NavActions className={styles['desktop-menu_actions']} />
                    </React.Fragment>}

                    {windowWidth < 1000 && <MobileMenuIcon onToggleMobileMenu={toggleMobileMenu} />}
                </section>
            </nav>
        </header>
    );
};

export default Header;