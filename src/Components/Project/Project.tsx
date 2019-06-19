import React from 'react'
import Article, { ArticleProps } from '../Article/Article'
import AnimatedAnchor, {animatedAnchorProps} from "../AnimatedAnchor/AnimatedAnchor"

export interface ProjectProps {
  hContent: string,
  githubLink?: animatedAnchorProps,
  articlesContent: Array<ArticleProps>
}

const hStyle = {marginLeft: '10%'}

const Project: React.FunctionComponent<ProjectProps> = 
({hContent, githubLink, articlesContent}) => (
  <div 
    className={"article"}
  >
    <h2 
      style={hStyle}
      className={'hbox'}
    >
      {hContent} 
      {(githubLink) ? <AnimatedAnchor {...githubLink}/> : ""}
    </h2>
    {
      articlesContent.map(
        article => <Article key={article.hContent} {...article}/>)
    }
  </div>
)

export default Project