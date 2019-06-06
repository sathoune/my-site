import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const App: JSX.Element = () => {
  return (
    <div className={"vbox main vfill hfill"}>
      <Navbar />
      <Main />
      <Footer />            
    </div>
  );
}

export default App;
