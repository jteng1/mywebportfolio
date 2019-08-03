import React, { Component } from 'react';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id='home' className='app'>
        <CustomNavbar />
        <Home />
        <About />
        <Portfolio />
        <Work />
        <Education />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
