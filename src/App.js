import React from 'react';
import Game from './components/Game';
import Pad from './components/Pad';

import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Pad/>
    </div>
  );
}

export default App;