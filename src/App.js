import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Game from './pages/Game';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter> 
        <div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Game" exact component={Game}/>
        </div>  
       </BrowserRouter>  
    </div>
   
  );
}

export default App;