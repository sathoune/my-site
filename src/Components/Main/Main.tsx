import React from 'react'
import Article from '../Article/Article'
import aboutMe0 from '../component-data/about-0'
import aboutMe1 from '../component-data/about-1'
import skills from '../component-data/skills'
import FancyBoxContainer from '../FancyBox/FancyBoxContainer'
import projects from '../component-data/projects'
import ProjectContainer from '../Project/ProjectContainer'
import ToTopButton from '../ToTopButton/ToTopButton';

const Main: React.FunctionComponent = () => {
    return (
        <main className={"vbox center"}>
            <Article {...aboutMe0} />
            <Article {...aboutMe1} />
            <FancyBoxContainer {...skills}/>
            <ProjectContainer {...projects} />
            <ToTopButton target={'#navbar'} />
        </main>
    )
}
export default Main