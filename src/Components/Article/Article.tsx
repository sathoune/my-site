import React from 'react'

export interface ArticleProps {
  hContent: string,
  paragraphs: Array<pProps>
}

export interface pProps {
  key: string,
  content: string
}

const Article: React.FunctionComponent<ArticleProps> = 
({hContent, paragraphs}) => {
  return (
    <div 
      className={"article"}
    >
      <h2>
        {hContent}
      </h2>
      {paragraphs.map(txt => <p key={txt.key}>{txt.content}</p>)}
    </div>
  )
}

export default Article