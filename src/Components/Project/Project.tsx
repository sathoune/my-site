import React from 'react'
import Article, { ArticleProps } from '../Article/Article'

export interface ProjectProps {
  hContent: string,
  articlesContent: Array<ArticleProps>
}

const Project: React.FunctionComponent<ProjectProps> = 
({hContent, articlesContent}) => {
  return (
    <div>
      <h2>{hContent}</h2>
      {articlesContent.map(article => <Article {...article}/>)}
    </div>
  )
}

export default Project