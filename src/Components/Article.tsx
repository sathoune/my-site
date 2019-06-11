import React from 'react';

export interface ArticleProps {
    name: string,
    htmlElement: string,
    content: Array<ArticleProps> | string
};



const Article: React.FunctionComponent<ArticleProps> = ({name, htmlElement, content}) => { 
    return (typeof(content) === "string") ? (
        <article className={'vbox align-start'}>
            <header>{name}</header>
            <p>{content}</p>
        </article>
    ) : (
        <article className={'vbox align-start'}>
            <header>{name}</header>
            {content.map( child => <Article {...child} />)}
        </article>    
    )
}

export default Article;