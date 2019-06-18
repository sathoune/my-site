import { ProjectProps } from '../Project/Project'
import { ProjectContainerProps } from '../Project/ProjectContainer'

const projectArray: Array<ProjectProps> = [
  {
    hContent: 'teahouse POS sstem',
    articlesContent: [
      {
        hContent: 'Purpose',
        paragraphs: [{
          key: 'p0',
          content:   `To abandon Excel sheet as a way to store orders and to create solution 
          that will make harder for users to make a mistake.`
        }]
      } , {
        hContent: 'Stack',
        paragraphs: [{
          key: 'p0',
          content: `Stack:
          html/css + vanilla.js
          node.js/express
          mongoDB`
        }]
      } , {
        hContent: 'Result',
        paragraphs: [{
          key: 'p0',
          content:   `Solution was complete and functional and beside starting functionality 
          of storing orders I enhanced it by weekly ToDo list for employees, 
          reservation system, archive and statistics for items ordered.`
        }]
      } , {
        hContent: 'Takeaway',
        paragraphs: [{
          key: 'p0',
          content: `I have learnt how to split big idea into digestible chunks that can 
          be realized during short periods of time, iterate through a product 
          by allowing it to scale by developing new features.`
        } , {
          key: 'p1',
          content: `Solution nowadays does not satisfy me so I am refactoring it because 
          I got better grasp on how to plan and modularize code and I have learnt 
          new technics that I am eager to try. 
          Attempt could be find here. `
        } , {
          key: 'p2',
          content: `My plan is to use again express and mongoDB 
          on backend and try to program in TDD methodology with mocha/chai testing 
          framework. Backend shall be separated from Frontend so I would like to 
          finish before creating UI. For frontend I am going to use React/Redux 
          hopefully with TDD as well.`    
        }]
      }
    ]
  } , {
    hContent: 'spotify-folders',
    articlesContent: [
      {
        hContent: 'Purpose',
        paragraphs: [{
          key: 'p0',
          content:   `My Spotify saved albums exceeded count of 300 and proved difficulties
          while finding music I would like to listen. Native playlist were not 
          really sufficient for me and feature of grouping albums into folders 
          was promised to not be made by Spotify Support.`
        }]
      } , {
        hContent: 'Stack',
        paragraphs: [{
          key: 'p0',
          content: `React + Redux
          SpotifyAPI as backend
          JSON as storage`
        }]
      } , {
        hContent: 'Result',
        paragraphs: [{
          key: 'p0',
          content: `User is able to create a folder inside which is basic data about 
          selected albums. Clicking album cover redirects to Spotify web 
          player (or desktop app if user agreed in app’s settings to do so). 
          One can assign album to multiple folders so they can act also as tags.`
        }]
      } , {
        hContent: 'Takeaway',
        paragraphs: [{
          key: 'p0',
          content: `I have learnt how to use Spotify Dev API and how to use Redux patterns
          with React. I have decided to not use class-based React components but
          functional components and hooks for updates and managing local state.`
        }]
      }
    ]
  }
]

const projects: ProjectContainerProps = {
  projectsProps: projectArray
}

export default projects;