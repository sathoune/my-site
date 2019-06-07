import React from 'react';

export interface animatedAnchorProps {
    id: string,
    href: string,
    image: string,
    altImage: string,
    altText: string,
}

const AnimatedAnchor: React.FunctionComponent<animatedAnchorProps> = (props) => {
    return (
        <a 
            id={props.id} 
            href={props.href}
            className={"navbar-anchor"}
        >
            <img 
                src={props.image} 
                alt={props.altText}
            >       
            </img>
        </a>);
}

export default AnimatedAnchor
