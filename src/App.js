import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Knowledge from './screens/Knowledge';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/projects' exact component={Projects}></Route>
        <Route path='/knowledge' exact component={Knowledge}></Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
