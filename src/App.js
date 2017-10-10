import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link, withRouter } from 'react-router-dom';
import Home from './Components/Home';
import Project from './Components/Project';
import ProjectDetails from './Components/ProjectDetails';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <span>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </span>
        <main>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/:id" component={ProjectDetails} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);