import React, { useEffect, useState } from "react";
import SmurfVillage from './SmurfVillage';
import axios from 'axios';
import "./App.css";

import { SmurfContext } from '../contexts/SmurfContext';


function App() {
  const smurfState = [{
    name: "",
    age: "",
    hieght: ""
  }];

  const [formState, setFormState] = useState(smurfState);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        smurfState.push(res.data)
      })
      .catch(err => {
        console.log("err ", err)
      })
  })

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3333/smurfs", smurfState)
  }
  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form>
          <input type='text' placeholder="Smurf Name" name="smurf-name" value={SmurfContext.name} />
          <input type="text" placeholder="Smurf Age" name="smurf-age" value={SmurfContext.age} />
          <input type='text' placeholder="Smurf Hieght" name='smurf-ht' value={SmurfContext.hieght} />
          <button>Send To Village</button>
        </form>
        <SmurfContext.Provider value={{smurfState}}>
          <SmurfVillage />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
