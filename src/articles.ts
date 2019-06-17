import {ArticleProps} from './Components/Article/Article';
import FancyBox from './Components/FancyBox/FancyBox';

const jsImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png";
const reactImage = "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";
const nodeImage = "http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png";
const cssLogo = "https://cdn.worldvectorlogo.com/logos/css3.svg";
const mongoLogo = "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg";
const gitLogo = "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png";
const reduxLogo = "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png";
const htmlLogo = "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png";
const mochaLogo = "https://cldup.com/xFVFxOioAU.svg";

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
    } , {
        name: 'fancy-boxes',
        htmlTag: 'div',
        properties: {
           className: "fancy-parent"
        },
        content: [{
            name: 'js',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: jsImage,
                hiddenContent: "es6, functional-style programming, jQuery, "
            },
            content: ""    
        }, {
            name: 'node',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: nodeImage,
                hiddenContent: "npm, express"
            },
            content: ""
        },{
            name: 'react',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: reactImage,
                hiddenContent: 'functional/class based components, hooks'
            },
            content: ""
        }, {
            name: 'css',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: cssLogo,
                hiddenContent: 'CSS3, SCSS'
            },
            content: ""
        }, {
            name: 'redux',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: reduxLogo,
                hiddenContent: 'usage with react'
            },
            content: ""
        }, {
            name: 'git',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: gitLogo,
                hiddenContent: 'github'
            },
            content: ""
        } , {
            name: 'html',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: htmlLogo,
                hiddenContent: "HTML5, ejs, pug, semantic markup"
            },
            content: ""
        } ,{
            name: 'testin',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: mochaLogo,
                hiddenContent: "mocha+chai, tdd, bdd, unit, integration, functional testing"
            },
            content: ""
        } , {
            name: 'mongodb',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: mongoLogo,
                hiddenContent: "idk right?"
            },
            content: "" 
        }]    
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