import React, { useEffect } from "react";
import SmurfVillage from './SmurfVillage';
import axios from 'axios';
import "./App.css";

import {SmurfContext } from '../contexts/SmurfContext';


function App() {
  const smurfs = [];

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        smurfs.push(res.data)
      })
      .catch(err => {
        console.log("err ", err)
      })
  })
console.log(smurfs);
  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form>
          <input type='text' placeholder="Smurf Name" name="smurf-name" />
          <input type="text" placeholder="Smurf Age" name="smurf-age" />
          <input type='text' placeholder="Smurf Hieght" name='smurf-ht' />
          <button>Send To Village</button>
        </form>
        <SmurfContext.Provider value={{smurfs}}>
          <SmurfVillage />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
