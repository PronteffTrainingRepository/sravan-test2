import React from "react";

import "./App.css";
// import Profile from "./LoginForm/Profile";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Home from "./Router/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Profile/> */}
        <About />
        <Contact />
        <Home />
      </div>
    </Router>
  );
}

export default App;
