import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Game from './pages/Game';
<<<<<<< HEAD
import { Route, BrowserRouter } from 'react-router-dom';
import Popuploose from './components/Popuploose';
import Popupwin from './components/Popupwin';
=======
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
>>>>>>> a8beed197b542db0900124ceee9c54078151e75e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <BrowserRouter>
     <div>
       <Route path="/" exact component={Homepage}/>
       <Route path="/Game" exact component={Game}/>
     </div>
    </BrowserRouter>
 </div>
=======
       <BrowserRouter> 
        <div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Game" exact component={Game}/>
        </div>  
       </BrowserRouter>  
    </div>
   
>>>>>>> a8beed197b542db0900124ceee9c54078151e75e
  );
}

export default App;