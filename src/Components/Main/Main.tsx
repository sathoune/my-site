import React from 'react';
import Factory from '../Factory/Factory';
import Article from '../Article/Article';
import articles from '../component-data/articles';
import aboutMe0 from '../component-data/about-0';
import aboutMe1 from '../component-data/about-1';
import skills from '../component-data/skills';
import FancyBoxParent from '../FancyBox/FancyBoxParent';

const Main: React.FunctionComponent = () => {
    return (
    <main className={"vbox center"}>
        <Article {...aboutMe0} />
        <Article {...aboutMe1} />
        <FancyBoxParent {...skills}/>
        <Factory {...articles} />

    </main>);
}
export default Main;