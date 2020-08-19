import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Knowledge from './screens/Knowledge';
import Contact from './screens/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Knowledge />
      <Contact />
    </>
  );
}

export default App;
