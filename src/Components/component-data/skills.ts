import { FancyBoxParentProps } from '../FancyBox/FancyBoxParent';
import { FancyBoxProps } from '../FancyBox/FancyBox';

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


const fancyBoxes:Array<FancyBoxProps> = [
    {
        backgroundImage: logoData.js.img,
        hiddenProps: {
            content: "es6, functional-style programming, jQuery, ",
            backgroundColor: logoData.js.color
        }
    } , {
        backgroundImage: logoData.node.img,
        hiddenProps: {
            content: "npm, express, RESTful API",
            backgroundColor: logoData.node.color
        },
    } , {
        backgroundImage: logoData.react.img,
        hiddenProps: {
            content: 'functional/class based components, hooks',
            backgroundColor: logoData.react.color
        }
    } , {
        backgroundImage: logoData.css.img,
        hiddenProps: {
            content: 'CSS3, SCSS, Responsive Web Design',
            backgroundColor: logoData.css.color
        }
    } , {
        backgroundImage: logoData.redux.img,
        hiddenProps: {
            content: 'usage with react',
            backgroundColor: logoData.redux.color
        }
    } , {
        backgroundImage: logoData.git.img,
        hiddenProps: {
            content: 'github',
            backgroundColor: logoData.git.color
        }
    } , {
        backgroundImage: logoData.html.img,
        hiddenProps: {
            content: "HTML5, ejs, pug, semantic markup",
            backgroundColor: logoData.html.color
        }
    } , {
        backgroundImage: logoData.mocha.img,
        hiddenProps: {
            content: "mocha+chai, tdd, bdd, unit, integration, functional testing",
            backgroundColor: logoData.mocha.color
        }
    } , {
        backgroundImage: logoData.mongo.img,
        hiddenProps: {
            content: "idk right?",
            backgroundColor: logoData.mongo.color
        }
    } ,
]

const skills: FancyBoxParentProps = {
    fancyBoxes
}

export default skills;