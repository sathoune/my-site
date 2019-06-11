import React from "react";
import Article from "./Article";
import articles from "../articles";

const Main: React.FunctionComponent = () => {
    return (<main className={"vbox center"}>
        <Article {...articles.aboutMe} />
        <Article {...articles.fancyArticle} />
        <Article {...articles.skills} />
        <Article {...articles.portfolio} />
    </main>);
}
export default Main;