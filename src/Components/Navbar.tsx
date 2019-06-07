import React from "react";
import NavbarButton from "./NavbarButton";
import AnimatedAnchor from "./AnimatedAnchor";

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

            {/* <AnimatedAnchor props={linkedInProps}/> */}
            <AnimatedAnchor    
                id={"linkedin"}
                href={"https://www.linkedin.com/in/michal-bargiel/"}
                image={"/linkedin-blue.png"}
                altImage={"31"}
                altText={"LinkedIn logo"}
            />
            
            <AnimatedAnchor    
                id={"github"}
                href={"https://github.com/captainCapitalism"}
                image={"/github-dark.png"}
                altImage={"31"}
                altText={"Github Logo"}
            />
        
        </nav>
    );
};

export default Navbar;