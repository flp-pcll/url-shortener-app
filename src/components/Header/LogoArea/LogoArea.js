import React from "react";
import Logo from "../../UI/Logo/Logo";

function LogoArea(props) {
    return(
        <a href={props.href} title={props.title}>
            <Logo />
        </a>
    );
};

export default LogoArea;