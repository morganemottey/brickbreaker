import React from 'react';
import Game from './components/Game';
import Countdown from './components/Countdown.js';
import Timer from './components/Timer.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Game />
      <Countdown />
      <Timer />
    </div>
  );
}

export default App;