import React, { useEffect } from "react";
import SmurfVillage from './SmurfVillage';
import axios from 'axios';
import "./App.css";

import {SmurfContext } from '../contexts/SmurfContext';


function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(" database response", res)
      })
      .catch(err => {
        console.log("err ", err)
      })
  })
  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* <SmurfContext.Provider value={{smurfs}}>
          <SmurfVillage />
        </SmurfContext.Provider> */}
      </div>
    );
}

export default App;
