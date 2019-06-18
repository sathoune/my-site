import React from 'react';

export interface FactoryProps {
    name: string,
    htmlTag: string | React.FunctionComponent<any>,
    properties?: any,
    content: Array<FactoryProps> | string
};

const Factory: React.FunctionComponent<FactoryProps> = ({htmlTag, properties, content}) => ( 
    (typeof(content) === 'string') ? 
    ( React.createElement(htmlTag, properties, content) ) 
    : 
    ( React.createElement( htmlTag, properties, content.map( child => ( <Factory {...child} />))))
)

export default Factory;