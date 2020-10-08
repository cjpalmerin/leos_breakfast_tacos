import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar'
import { Jumbotron } from './Components/Jumbotron/Jumbotron'
import { About } from './Components/About/About'
import { Menu } from './Components/Menu/Menu'
import { Music } from './Components/Music/Music'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <Menu />
      <Music />

    </div>
  );
}

export default App;
