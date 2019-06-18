import {FactoryProps} from '../Factory/Factory';
import FancyBox from '../FancyBox/FancyBox';
import aboutMe0 from './about-0';
import aboutMe1 from './about-1';
import skills from './skills';
import projects from './projects';

const articles: FactoryProps = {
    name: 'data',
    htmlTag: 'div',
    content: [
        aboutMe0,
        aboutMe1,
        skills,
        projects
    ]
};

export default articles;