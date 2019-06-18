import {FactoryProps} from '../Factory/Factory';
import FancyBox from '../FancyBox/FancyBox';
import Article from '../Article/Article';

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

export default skills;