import React from "react";
import "./App.css";
import AnimatedAnchor, {animatedAnchorProps} from "./AnimatedAnchor";

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

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="hbox">
            bye    
            <AnimatedAnchor {...linkedInProps} />
            <AnimatedAnchor {...gitHubProps} />
        </footer>
    );
}

export default Footer;