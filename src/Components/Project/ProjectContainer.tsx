import React from 'react'
import Project, {ProjectProps} from './Project'

export interface ProjectContainerProps {
  projectsProps: Array<ProjectProps>
}

const hStyle = {
  alignSelf: 'flex-start'
}

const ProjectContainer: React.FunctionComponent<ProjectContainerProps> = 
({projectsProps}) => {
  return (
    <div className={"article vbox center"}>
      <h2 style={hStyle}>Projects</h2>
      {projectsProps.map( projectProps => <Project key={projectProps.hContent} {...projectProps} />)}
    </div>    
  )
}

export default ProjectContainer