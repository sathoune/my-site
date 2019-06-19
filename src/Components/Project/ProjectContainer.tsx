import React from 'react'
import Project, {ProjectProps} from './Project'

export interface ProjectContainerProps {
  id: string,
  projectsProps: Array<ProjectProps>
}

const hStyle = {
  alignSelf: 'flex-start'
}

const ProjectContainer: React.FunctionComponent<ProjectContainerProps> = 
({id, projectsProps}) => {
  return (
    <div id={id} className={"article vbox center"}>
      <h2 style={hStyle}>Projects</h2>
      {projectsProps.map( projectProps => <Project key={projectProps.hContent} {...projectProps} />)}
    </div>    
  )
}

export default ProjectContainer