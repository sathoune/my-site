import {ArticleProps} from '../Article/Article';
import ids from './main-ids';

const aboutMe0: ArticleProps = {
  id: ids.about0,
  hContent: 'About me',
  paragraphs:[{
    key: 'p0',
    content: `I enjoy making things. This often comes with the burden of challenges. 
    I prefer to split them into smaller, logical, more abstract problems.
    Working this way keeps me motivated since my progress seems more noticeable.
    I found software engineering convenient because I am able to code from any place 
    around the world as long as I have computer access; moreover access to 
    learning resources are more widerspread and diverse than ever.`
  } , {
    key: 'p1',
    content: `I focus on web development. Managing backend and frontend helps me to 
    better comprehend how layers of application work, how to integrate them and 
    how to find ways to separate its concerns 
    in order to achieve clear architecture that is robust and open to extension.`
  } , {
    key: 'p2',
    content: `I make mistakes. A lot of then, in fact. But every time 
    I review my solutions I try to study what could 
    be improved and research possible solutions. This process helps me gain knowledge 
    and expertise quickly and avoid committing similar errors in the future.`
  }]
};

export default aboutMe0;