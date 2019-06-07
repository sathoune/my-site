import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const App: React.FunctionComponent = () => {
  return (
    <div className={"vbox center vfill hfill"}>
      <Navbar />
      <Main />
      <Footer />            
    </div>
  );
}

export default App;
