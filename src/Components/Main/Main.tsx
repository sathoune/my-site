import React from "react";
import Factory from "../Factory/Factory";
import articles from "../../articles";

const Main: React.FunctionComponent = () => {
    return (
    <main className={"vbox center"}>
        <Factory {...articles} />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
     
        </div>
    </main>);
}
export default Main;