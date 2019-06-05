import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className={"vbox bordered main"}>
      <Navbar />
      <Main />
      <Footer />            
    </div>
  );
}

export default App;
