import ids from '../component-data/main-ids'
import {NavbarButtonProps} from '../NavbarButton/NavbarButton'

const navbarButtonProps: Array<NavbarButtonProps> = [
  {
    text: "About", 
    href: "#" + ids.about0  
  } , { 
    text: "Skills", 
    href: "#" + ids.skills
  } , { 
    text: "Projects",
    href: "#" + ids.projects
  }
]

export default navbarButtonProps
