import React from "react";
import Article from "./Article";
import articles from "../articles";

const Main: React.FunctionComponent = () => {
    return (<main className={"vbox center"}>
        <Article {...articles.aboutMe} />
        <Article {...articles.fancyArticle} />
        <Article {...articles.fancyArticle} />
        <Article {...{...articles.fancyArticle, title: "WHAT FUCK I DID JUST BRING UPON THIS CURSED LAND"}} />
    </main>);
}
export default Main;