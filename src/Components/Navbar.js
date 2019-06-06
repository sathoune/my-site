import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
    return (
        <div className={"hbox align-start red-background hfill"}>
            <NavbarButton text="helo"/>
            <NavbarButton text="more helo"/>
            <NavbarButton text="even more helo"/>
            <NavbarButton text="lovelyt"/>
            </div>
    );
};

export default Navbar;