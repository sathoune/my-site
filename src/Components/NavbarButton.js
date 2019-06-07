import React from "react";
import "./NavbarButton.css";

const NavbarButton = (props) => {
    return (
        <button 
            className={"navbar-btn"}>
            {props.text}
        </button>
    );
};

export default NavbarButton;