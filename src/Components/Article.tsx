import React from 'react';

interface articleProps {
    title: string,
    text: string,
}

const Article: React.FunctionComponent<articleProps> = ({title, text}) => {
    return (
        <article className={'vbox align-start'}>
            <header>{title}</header>
            <p>{text}</p>
        </article>
    )
}

export default Article;