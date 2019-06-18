import React from 'react'
import Project, {ProjectProps} from './Project'

export interface ProjectContainerProps {
  projectsProps: Array<ProjectProps>
}

const ProjectContainer: React.FunctionComponent<ProjectContainerProps> = 
({projectsProps}) => {
  return (
    <div className={"article"}>
      <h2>Projects</h2>
      {projectsProps.map( projectProps => <Project {...projectProps} />)}
    </div>    
  )
}

export default ProjectContainer