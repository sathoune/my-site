import {ArticleProps} from '../Article/Article';
import ids from './main-ids';

const aboutMe0: ArticleProps = {
  id: ids.about0,
  hContent: 'Abuot me',
  paragraphs:[{
    key: 'p0',
    content: `I enjoy making things. This often comes with burden of challenges. 
    However, when I split them into smaller, abstractable problems and approach them with logic,
    working on them is easier and feeling of progress keeps me motivated.
    I found software engineering convenient because I am able to program from any place 
    around the earth as long as I have computer access and today learning resources 
    are more accessible and diverse than ever.`
  } , {
    key: 'p1',
    content: `I focus on web development. Managing backend and frontend helps me to 
    gain better comprehension how layers of application work and how to find ways to 
    separate its concerns in order to achieve clear architecture that is robust and easy to enhance.`
  } , {
    key: 'p2',
    content: `I make mistakes. A lot. But every time I review my solutions I try to study what could 
    be improved and research about possible solutions. This process helps me gain knowledge and understanding
    quickly and not to commit similar errors in the future.`
  }]
};

export default aboutMe0;