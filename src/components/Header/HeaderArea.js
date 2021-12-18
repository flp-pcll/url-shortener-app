import React, { useState, useEffect } from "react";
import styles from "./HeaderArea.module.css";
import LogoArea from "./LogoArea/LogoArea";
import NavActions from "./NavActions/NavActions";
import NavLinks from "./NavLinks/NavLinks";
import Burger from "./MobileMenuIcon/Burger";

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const windowResizeHandler = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', windowResizeHandler);
        return () => window.removeEventListener('resize', windowResizeHandler);
    }, [windowWidth]);


    console.log(windowWidth);
    return (
        <header>
            <nav className={styles['top-navigation_container']}>
                <section className={styles['logo-area']} id="logoArea" title="Shortly Logo Area">
                    <LogoArea />
                </section>
                <section className={styles['nav-content']} title="Shortly Navigation Links">
                    {windowWidth > 1000 && 
                    <React.Fragment>
                        <NavLinks />
                        <NavActions />
                    </React.Fragment>}

                    {windowWidth < 1000 && <Burger />}
                </section>
            </nav>
        </header>
    );
};

export default Header;