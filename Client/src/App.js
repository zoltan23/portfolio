import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Knowledge from './screens/Knowledge';
import Contact from './screens/Contact';
import Test from './screens/Test';
import './App.css';

function App() {
  return (
    <div className="">
      {/* <Test /> */}
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
