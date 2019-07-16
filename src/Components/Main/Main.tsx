import React from 'react'
import Article from '../Article/Article'
import aboutMe0 from '../component-data/about-0'
import skills from '../component-data/skills'
import FancyBoxContainer from '../FancyBox/FancyBoxContainer'
import projects from '../component-data/projects'
import ProjectContainer from '../Project/ProjectContainer'
import GoToLink, { GoToLinkProps } from '../GoToLink/GoToLink'
import MailFrom from '../MailForm/MailForm';

const goToLinkProps: GoToLinkProps = {
  fixedFromTop: '80%',
  fixedFromLeft: '90%',
  color: 'white',
  link: '#navbar'
}

const Main: React.FC = () => (
  <main className={"vbox center"}>
    <Article {...aboutMe0} />
    <FancyBoxContainer {...skills}/>
    <ProjectContainer {...projects} />
    <GoToLink {...goToLinkProps} />
  </main>
)

export default Main