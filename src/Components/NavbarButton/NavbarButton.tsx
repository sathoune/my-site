import React from "react";
import "./NavbarButton.css";

export interface NavbarButtonProps {
    text: string,
    exec: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

export const NavbarButton: React.FunctionComponent<NavbarButtonProps> = 
    ({text, exec}) => {
    return (
        <button 
            className={"navbar-btn"}
            onClick={exec}
        >
            {text}
        </button>
    );
};

export default NavbarButton;