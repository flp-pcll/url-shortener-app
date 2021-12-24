import React from "react";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterNavLinks from "../FooterNavLinks/FooterNavLinks";
import styles from "./SocialMedia.module.css";

const socialMediaMenu = [
    {
        id: '001',
        title: <FaFacebookSquare />,
        to: '/'
    },
    {
        id: '002',
        title: <FaTwitter />,
        to: '/'
    },
    {
        id: '003',
        title: <FaPinterest />,
        to: '/'
    },
    {
        id: '004',
        title: <FaInstagram />,
        to: '/'
    }
];

function SocialMedia(props) {

    return (
        <FooterNavLinks className={styles['social-media_items']} links={socialMediaMenu} />
    );
};

export default SocialMedia;