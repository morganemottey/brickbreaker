import React from 'react';
import Game from './components/Game';
import MoveBart from './components/MoveBart'
import './App.css';


function App() {
  return (
    <div className="App">
      <Game />
      <MoveBart/>
    </div>
  );
}

export default App;