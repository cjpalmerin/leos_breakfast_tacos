import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar'
import { Jumbotron } from './Components/Jumbotron/Jumbotron'
import { About } from './Components/About/About'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
    </div>
  );
}

export default App;
