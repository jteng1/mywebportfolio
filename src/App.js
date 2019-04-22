import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div id="home" className="app">
        <CustomNavbar />
        <Home />
        <About />
        <Work />
        <Education />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default App;
