import React from "react";
import LogoArea from "../../Header/LogoArea/LogoArea";
import FooterNavLinks from "../FooterNavLinks/FooterNavLinks";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./FooterNav.module.css";

const featuresMenu = [
    {
        id: '001',
        title: 'Features',
        to: '/',
    },
    {
        id: '002',
        title: 'Link Shortening',
        to: '/'
    },
    {
        id: '003',
        title: 'Branded Links',
        to: '/'
    },
    {
        id: '004',
        title: 'Analytcs',
        to: '/'
    }
];

const resourcesMenu = [
    {
        id: '001',
        title: 'Resources',
        to: '/'
    },
    {
        id: '002',
        title: 'Blog',
        to: '/'
    },
    {
        id: '003',
        title: 'Developers',
        to: '/'
    },
    {
        id: '004',
        title: 'Support',
        to: '/'
    }
];

const companyMenu = [
    {
        id: '001',
        title: 'Company',
        to: '/'
    },
    {
        id: '002',
        title: 'About',
        to: '/'
    },
    {
        id: '003',
        title: 'Our Team',
        to: '/'
    },
    {
        id: '004',
        title: 'Careers',
        to: '/'
    },
    {
        id: '005',
        title: 'Contact',
        to: '/'
    }
];

const socialMediaMenu = [
    {
        id: '001',
        title: 'Facebook',
        to: '/'
    },
    {
        id: '002',
        title: 'Twitter',
        to: '/'
    },
    {
        id: '003',
        title: 'Pinterest',
        to: '/'
    },
    {
        id: '004',
        title: 'Instagram',
        to: '/'
    }
];

function FooterNav() {
    return (
        <div className={styles['footer-flex']}>
        <nav className={styles['footer-nav_container']}>
                <section className={styles['footer-nav_logo-area']}>
                    <LogoArea />
                </section>
                <section className={styles['footer-nav_navigation-lists']} title="footer nav links area">
                    <FooterNavLinks title="Shortly Features" aria-label="Shortly Features Menu" links={featuresMenu} />
                    <FooterNavLinks title="Shortly Resources" aria-label="Shortly Resources Menu" links={resourcesMenu} />
                    <FooterNavLinks title="Shortly Company" aria-label="Shorly Company Menu" links={companyMenu} />
                    <SocialMedia title="Social Media Links" aria-label="Shortly Social Media Menu" />
                </section>
        </nav>
        </div>
    );
};

export default FooterNav;