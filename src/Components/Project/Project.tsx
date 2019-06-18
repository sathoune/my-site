import React from 'react'
import Article, { ArticleProps } from '../Article/Article'

export interface ProjectProps {
  hContent: string,
  articlesContent: Array<ArticleProps>
}

const hStyle = {
  marginLeft: '10%'
}

const Project: React.FunctionComponent<ProjectProps> = 
({hContent, articlesContent}) => {
  return (
    <div 
      className={"article"}
    >
      <h2 style={hStyle}>{hContent}</h2>
      {articlesContent.map(article => <Article key={article.hContent} {...article}/>)}
    </div>
  )
}

export default Project