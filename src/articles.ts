import {ArticleProps} from './Components/Article/Article';

const aboutMe: ArticleProps = {
    name: 'About0',
    htmlTag: 'div',
    content: [{
            name: 'headline0',
            htmlTag: 'h2',
            content: `Abut me`    
        },{
            name: 'paragraph0',
            htmlTag: 'p',
            content: `I believe I am creator. //a creator.or the, if you think you're God
            Not a programmer nor a software developer. //neither nor

            I think that because more than spending time in front of keyboard, I enjoy making things.` 
        },{
            name: 'paragraph1',
            htmlTag: 'p',
            content: `However, one often needs expensive tools or expandable materials that he makes objects with. It is difficult to move them around and to share the result with others.
            To program one is only required to possess computer and Internet access which both are pretty common to have.`
        },{
            name: 'paragraph2',
            htmlTag: 'p',
            content: `That is why I find creating software more convenient for me. Developer still needs to have professional expertise as well as to put time and effort to achieve quality work; however, I greatly enjoy tinkering, solving problems and learning new concepts which allow me to learn quickly and achieve results.`
        }]
};

const fancyArticle: ArticleProps = {
    name: 'about1',
    htmlTag: 'div',
    content: [{
        name: 'headline0',
        htmlTag: 'h2',
        content: 'More about me'
    },{
        name: 'paragraph0',
        htmlTag: 'p',
        content: `When I do not code I greatly enjoy dedicating my time to the world of tea. 
        Gong Fu sessions help me regain focus and relax between challenging tasks during day 
        while are also exquisite experience from sensorical point of view.`
    },{
        name: 'paragraph1',
        htmlTag: 'p',
        content: `I try to cultivate awareness of reality. 
        Observing and noticing patterns, structures or abstraction in everyday life 
        improves my understanding of processes that we are subject of 
        while enhances my problem solving ability 
        which is also crucial in my professional interest.`
    }]
};

const skills: ArticleProps = {
    name: 'skills0',
    htmlTag: 'div',
    content: [{
        name: 'headline',
        htmlTag: 'h2',
        content: 'Skills'
    },{
        name: 'paragraph0',
        htmlTag: 'p',
        content: `I used: 
        JS: es6, functional-style programming, jQuery, ; 
        node.js/npm: express; 
        html: HTML5, ejs, pug; 
        css: CSS3, SCSS; 
        git/github;
        react: functional/class based components, hooks;
        redux: ;
        tests: mocha+chai;`
    }]
};

const portfolio: ArticleProps = {
    name: 'projects',
    htmlTag: 'div',
    content: [{
        name: 'headline',
        htmlTag: 'h2',
        content: 'Projects'
    },{
        name: 'project0',
        htmlTag: 'div',
        content: `
        teahouse POS system:
        Purpose: To abandon Excel sheet as a way to store orders and to create solution that will make harder for users to make a mistake.
        Stack:
    html/css + vanilla.js
    node.js/express
    mongoDB
        Result:
    Solution was complete and functional and beside starting functionality of storing orders I enhanced it by weekly ToDo list for employees, reservation system, archive and statistics for items ordered.
        
    Takeaway:
        I have learnt how to split big idea into digestible chunks that can be realized during short periods of time, iterate through a product by allowing it to scale by developing new features. 
        Solution nowadays does not satisfy me so I am refactoring it because I got better grasp on how to plan and modularize code and I have learnt new technics that I am eager to try. 
        Attempt could be find here. My plan is to use again express and mongoDB on backend and try to program in TDD methodology with mocha/chai testing framework. Backend shall be separated from Frontend so I would like to finish before creating UI. For frontend I am going to use React/Redux hopefully with TDD as well.`    
    },{
        name: 'project1',
        htmlTag: 'div',
        content: `spotify-folders:

        Purpose: 
            My Spotify saved albums exceeded count of 300 and proved difficulties while finding music I would like to listen. Native playlist were not really sufficient for me and feature of grouping albums into folders was promised to not be made by Spotify Support.
        
        
        Stack:
            React + Redux
            SpotifyAPI as backend
            JSON as storage
        
        Result:
            User is able to create a folder inside which is basic data about selected albums. Clicking album cover redirects to Spotify web player (or desktop app if user agreed in app’s settings to do so). One can assign album to multiple folders so they can act also as tags.
        
        
        Takeaway:
            I have learnt how to use Spotify Dev API and how to use Redux patterns with React. I have decided to not use class-based React components but functional components and hooks for updates and managing local state.
        
            `
        
    }]
};

const articles: ArticleProps = {
    name: 'data',
    htmlTag: 'div',
    content: [
        aboutMe,
        fancyArticle,
        skills,
        portfolio
    ]
};

export default articles;