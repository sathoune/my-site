import React from 'react'

export interface ArticleProps {
    hContent: string,
    pContent: Array<string>
}

const Article: React.FunctionComponent<ArticleProps> = 
({hContent, pContent}) => {
    return (
        <div className={"article"}>
            <h2>{hContent}</h2>
            {pContent.map(txt => <p>{txt}</p>)}
        </div>
    )
}

export default Article