import React from 'react';
import './App.css';
import Countdown from './components/Countdown.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="App">
      <Countdown />
      <Timer />
    </div>
  );
}

export default App;
