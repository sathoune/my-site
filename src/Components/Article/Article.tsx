import React from 'react'

export interface ArticleProps {
  id?: string,
  hContent: string,
  paragraphs: Array<pProps>
}

export interface pProps {
  key: string,
  content: string
}

const Article: React.FunctionComponent<ArticleProps> = 
({id, hContent, paragraphs}) => {
  return (
    <div 
      id={(id? id : '')}
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