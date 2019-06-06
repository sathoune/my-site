import React from "react";
import "./NavbarButton.css";

const NavbarButton = (props) => {
    return (
        <div className="hbox btn-container">
        <button 
            className={"navbar-btn navbar-btn-main"}>
            {props.text}
        </button>
        <button 
            className={"navbar-btn navbar-btn-after"}>
        </button>
        </div>
    );
};

export default NavbarButton;