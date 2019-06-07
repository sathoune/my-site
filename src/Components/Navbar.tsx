import React from "react";
import NavbarButton from "./NavbarButton";

const placeholder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {console.log("hi")};

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className={"hbox align-start"}>
            <NavbarButton 
                text="helo" 
                exec={placeholder}
            />
            <NavbarButton 
                text="more helo" 
                exec={placeholder}
            />
            <NavbarButton 
                text="even more helo" 
                exec={placeholder}
            />
            <NavbarButton 
                text="lovelyt"
                exec={placeholder}
            />
        </nav>
    );
};

export default Navbar;