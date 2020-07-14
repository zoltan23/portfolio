import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Knowledge from './screens/Knowledge';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="img">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Knowledge />
      <Contact />
    </div>
  );
}

export default App;
