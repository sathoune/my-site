import { ArticleProps } from '../Article/Article';
import ids from './main-ids';

const aboutMe1: ArticleProps = {
  id: ids.about1,
  hContent: 'More about me',
  paragraphs: [
    {
      key: 'p0',
      content: `When I do not code I greatly enjoy dedicating my time to the world of tea. 
      Gong Fu sessions help me regain focus and relax between challenging tasks during day 
      while are also exquisite experience from sensorical point of view.`
    } , {
      key: 'p1',
      content: `I try to cultivate awareness of reality. 
      Observing and noticing patterns, structures or abstraction in everyday life 
      improves my understanding of processes that we are subject of 
      while enhances my problem solving ability 
      which is also crucial in my professional interest.`
    }
  ]
};

export default aboutMe1;