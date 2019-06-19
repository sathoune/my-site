import React from "react"
import "../App.css"
import AnimatedAnchor, {animatedAnchorProps} from "../AnimatedAnchor/AnimatedAnchor"
import animatedLinks from "../component-data/animatedLinks"


const Footer: React.FunctionComponent = () => (
  <footer className="hbox">
    bye    
    {
      animatedLinks.map( 
        link => <AnimatedAnchor key={link.id} {...link} />
      )
    }
  </footer>
)


export default Footer