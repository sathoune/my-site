import {FactoryProps} from './Components/Factory/Factory';
import FancyBox from './Components/FancyBox/FancyBox';
import Article from './Components/Article/Article';

const logoData = {
    js: {
        color: '#f7df1e',
        img: 'logos/js.png' 
    },
    css: {
        color: '#2062af',
        img: 'logos/css.png'
    },
    git: {
        color: '#f05033',
        img: 'logos/git.png'
    },
    html: { 
        color: '#e44d26',
        img: 'logos/html.png'
    },
    mocha: {
        color: '#8d6748',
        img: 'logos/mocha.png'
    },
    mongo: {
        color: '#499d4a',
        img: 'logos/mongodb.png'
    },
    node: {
        color: '#4bae4f',
        img: 'logos/node.png'
    },
    react: {
        color: '#00d8ff',
        img: 'logos/react.png'
    },
    redux: {
        color: '#764abc',
        img: 'logos/redux.png'
    },
}

const aboutMe: FactoryProps = {
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

const fancyArticle: FactoryProps = {
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

const skills: FactoryProps = {
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
                backgroundImage: logoData.js.img,
                hiddenProps: {
                    content: "es6, functional-style programming, jQuery, ",
                    backgroundColor: logoData.js.color
                }
            },
            content: ""    
        }, {
            name: 'node',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.node.img,
                hiddenProps: {
                    content: "npm, express, RESTful API",
                    backgroundColor: logoData.node.color
                }
            },
            content: ""
        },{
            name: 'react',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.react.img,
                hiddenProps: {
                    content: 'functional/class based components, hooks',
                    backgroundColor: logoData.react.color
                }
            },
            content: ""
        }, {
            name: 'css',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.css.img,
                hiddenProps: {
                    content: 'CSS3, SCSS, Responsive Web Design',
                    backgroundColor: logoData.css.color
                }
            },
            content: ""
        }, {
            name: 'redux',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.redux.img,
                hiddenProps: {
                    content: 'usage with react',
                    backgroundColor: logoData.redux.color
                }
            },
            content: ""
        }, {
            name: 'git',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.git.img,
                hiddenProps: {
                    content: 'github',
                    backgroundColor: logoData.git.color
                }
            },
            content: ""
        } , {
            name: 'html',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.html.img,
                hiddenProps: {
                    content: "HTML5, ejs, pug, semantic markup",
                    backgroundColor: logoData.html.color
                }
            },
            content: ""
        } , {
            name: 'testin',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.mocha.img,
                hiddenProps: {
                    content: "mocha+chai, tdd, bdd, unit, integration, functional testing",
                    backgroundColor: logoData.mocha.color
                }
            },
            content: ""
        } , {
            name: 'mongodb',
            htmlTag: FancyBox,
            properties: {
                backgroundImage: logoData.mongo.img,
                hiddenProps: {
                    content: "idk right?",
                    backgroundColor: logoData.mongo.color
                }
            },
            content: "" 
        }]    
    }]
};

const portfolio: FactoryProps = {
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

const articles: FactoryProps = {
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