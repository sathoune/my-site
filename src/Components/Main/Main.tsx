import React from "react";
import Article from "../Article/Article";
import articles from "../../articles";

const Main: React.FunctionComponent = () => {
    return (
    <main className={"vbox center"}>
        <Article {...articles} />
    </main>);
}
export default Main;