import React from "react";
import "./NavbarButton.css";

const NavbarButton = (props) => {
    return (
        <div className="hbox button-container">
        <button className={"navbar-button"}>
            {props.text}
        </button>
        <button className={"navbar-button-after"}></button>
        </div>
    );
};

export default NavbarButton;