import React from 'react'

export interface animatedAnchorProps {
  href: string,
  image: string,
  altImage: string,
  altText: string,
}

const AnimatedAnchor: React.FunctionComponent<animatedAnchorProps> = 
({href, image, altImage, altText}) => (
  <a 
    target='_blank'
    href={href}
    rel='noopener noreferrer'
    className={`blinking-anchor ${altImage}`}
  >
    <img 
      src={image} 
      alt={altText}
    >       
    </img>
  </a>
)

export default AnimatedAnchor
