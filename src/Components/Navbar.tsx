import React from "react";
import NavbarButton from "./NavbarButton";
import AnimatedAnchor, {animatedAnchorProps} from "./AnimatedAnchor";

const placeholder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {console.log("hi")};

const linkedInProps: animatedAnchorProps = {
    id: "linkedin",
    href: "https://www.linkedin.com/in/michal-bargiel/",
    image: "/linkedin-blue.png",
    altImage: "31",
    altText: "LinkedIn logo"
}

const gitHubProps: animatedAnchorProps = {
    id: "github",
    href: "https://github.com/captainCapitalism",
    image: "/github-dark.png",
    altImage: "31",
    altText: "Github Logo"
}

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

            <AnimatedAnchor {...linkedInProps} />
            <AnimatedAnchor {...gitHubProps} />
        </nav>
    );
};

export default Navbar;