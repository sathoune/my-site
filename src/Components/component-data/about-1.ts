import {FactoryProps} from '../Factory/Factory';

const abouteMe1: FactoryProps = {
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

export default abouteMe1;