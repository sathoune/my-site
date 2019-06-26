import React from "react"
import "../App/App.css"
import AnimatedAnchor from "../AnimatedAnchor/AnimatedAnchor"
import animatedLinks from "../component-data/animatedLinks"

const Footer: React.FunctionComponent = () => (
  <footer className="hbox">    
    {
      animatedLinks.map(link => 
        <AnimatedAnchor key={link.href} {...link} />)
    }
  </footer>
)


export default Footer