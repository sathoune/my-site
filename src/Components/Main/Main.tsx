import React from "react";
import Factory from "../Factory/Factory";
import articles from "../component-data/articles";

const Main: React.FunctionComponent = () => {
    return (
    <main className={"vbox center"}>
        <Factory {...articles} />

    </main>);
}
export default Main;