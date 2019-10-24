import React from 'react';
import Game from './components/Game';
import Pad from './components/Pad';

import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Game />
      <Pad/>
    </div>
  );
}

export default App;