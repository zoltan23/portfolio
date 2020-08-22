import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Knowledge from './screens/Knowledge';
import Contact from './screens/Contact';
import './App.css';
import Test from './screens/Test';
import Typewriter from './components/Typewriter';

function App() {
  return (
    <>
      {/* <Test /> */}
    {/* <Typewriter /> */}
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
