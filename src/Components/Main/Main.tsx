import React from "react";
import Article from "../Article/Article";
import articles from "../../articles";

const Main: React.FunctionComponent = () => {
    return (
    <main className={"vbox center"}>
        <Article {...articles} />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
     
        </div>
    </main>);
}
export default Main;