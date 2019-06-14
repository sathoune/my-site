import React from 'react';

export interface ArticleProps {
    name: string,
    htmlTag: string,
    properties?: string,
    content: Array<ArticleProps> | string
};

const Article: React.FunctionComponent<ArticleProps> = ({htmlTag, properties, content}) => ( 
    (typeof(content) === "string") ? 
    ( React.createElement(htmlTag, properties, content) ) 
    : 
    ( React.createElement( htmlTag, properties, content.map( child => ( <Article {...child} />))))
)


export default Article;