import React, {useState,useRef} from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Components/Main.js'
import Atomist from './Components/Atomist.js'

function App() {
  return (
    <div className="App">

      <Main>

        <Route path='#atomist' component={Atomist}/>

      </Main>

    </div>
  );
}

export default App;
