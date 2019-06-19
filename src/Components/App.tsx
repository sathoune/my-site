import React from "react"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import "./App.css"

const App: React.FunctionComponent = () => (
  <div 
    className={"vbox center vfill hfill"}
  >
    <Navbar id={'navbar'} />
    <Main />
    <Footer />   
  </div>
)

export default App