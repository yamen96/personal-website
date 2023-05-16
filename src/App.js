import React from 'react';
import SiteHeader from './components/SiteHeader';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SiteHeader/>
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
