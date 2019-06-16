import React from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import FancyBox from "./FancyBox/FancyBox";

const App: React.FunctionComponent = () => {
  return (
    <div className={"vbox center vfill hfill"}>
      <Navbar />
      <Main />
      <FancyBox />
      <Footer />   
               
    </div>
  );
}

export default App;
