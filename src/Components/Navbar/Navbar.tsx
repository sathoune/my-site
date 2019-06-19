import React from "react"
import NavbarButton from "../NavbarButton/NavbarButton"
import AnimatedAnchor, {animatedAnchorProps} from "../AnimatedAnchor/AnimatedAnchor"
import ids from '../component-data/main-ids'

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

interface NavbarProps {
  id: string
}

const Navbar: React.FunctionComponent<NavbarProps> = ({id}) => {
  return (
    <nav 
      id={id}
      className={"hbox align-start"}
    >
      <NavbarButton 
        text="about0" 
        href={"#" + ids.about0}
      />
      <NavbarButton 
        text="abou1" 
        href={"#" + ids.about1}
      />
      <NavbarButton 
        text="skills" 
        href={"#" + ids.skills}
      />
      <NavbarButton 
        text="porjeckt"
        href={"#" + ids.projects}
      />

      <AnimatedAnchor {...linkedInProps} />
      <AnimatedAnchor {...gitHubProps} />
    </nav>
  );
};

export default Navbar;