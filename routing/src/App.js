import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Navbar from "./Navbar";
import { Route, Switch } from 'react-router-dom';

const NotFound = () => <h1>Not found 😕</h1>

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About />
      <Projects /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;