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
                text="evenmorehelo" 
                exec={placeholder}
            />
            <NavbarButton 
                text="lovelyt"
                exec={placeholder}
            />

            <a id="linkedin" href="https://www.linkedin.com/in/michal-bargiel/">
                <img src="/linkedin-blue.png" alt="LinkedIn logo"></img>
            </a>

            <a id="github" href="https://github.com/captainCapitalism">
                <img id="github-logo" src="/github-dark.png" alt="Github Logo"></img>
            </a>
        
        </nav>
    );
};

export default Navbar;