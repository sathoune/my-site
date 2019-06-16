import React from 'react';

export interface ArticleElementProps {
    name: string,
    htmlElement: string,
    content: string,
}

const ArticleElement: React.FunctionComponent<ArticleElementProps> = props => {
    return (
        <div>ABc</div>
    )
}

export default ArticleElement;
