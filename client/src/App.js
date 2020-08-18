import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar'
import { Jumbotron } from './Components/Jumbotron/Jumbotron'
import { About } from './Components/About/About'
import { OSeparator } from './Components/OSeparator/OSeparator'
import { Menu } from './Components/Menu/Menu'
import { Music } from './Components/Music/Music'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <OSeparator />
      <Menu />
      <OSeparator />
      <Music />

    </div>
  );
}

export default App;
