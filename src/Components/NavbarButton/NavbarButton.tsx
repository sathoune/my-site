import React from "react"
import "./NavbarButton.css"

export interface NavbarButtonProps {
  text: string,
  href: string,
}

export const NavbarButton: React.FunctionComponent<NavbarButtonProps> = 
  ({text, href}) => (
  <a 
    className = {"navbar-btn"}
    href={href}
  >
    <button 
      className={"navbar-btn"}
    >    
      {text}
    </button>
  </a>
)

export default NavbarButton