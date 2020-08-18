import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar'
import { Jumbotron } from './Components/Jumbotron/Jumbotron'
import { About } from './Components/About/About'
import { OSeparator } from './Components/OSeparator/OSeparator'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <OSeparator />
    </div>
  );
}

export default App;
