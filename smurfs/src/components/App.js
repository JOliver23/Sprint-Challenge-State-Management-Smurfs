import React, { useEffect, useState } from "react";
import SmurfVillage from './SmurfVillage';
import axios from 'axios';
import "./App.css";

import { SmurfContext } from '../contexts/SmurfContext';


function App() {
  const smurfs = [{
    name: "",
    age: "",
    hieght: "",
    id: Date.now()
  }];

  const [formState, setFormState] = useState(smurfs);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("err ", err)
      })
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log("formState: ", formState)
    axios.post("http://localhost:3333/smurfs", formState)
  }

  const inputChange = e => {
    e.persist(); 
    const newFormData = {
        ...formState,
        [e.target.name]: e.target.value
    }; 
    setFormState(newFormData); // update state with new data
  };

  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Smurf Name" name="name" onChange={inputChange} value={formState.name} />
          <input type="text" placeholder="Smurf Age" name="age" onChange={inputChange} value={formState.age} />
          <input type='text' placeholder="Smurf Hieght" name='hieght' onChange={inputChange} value={formState.hieght} />
          <button type="submit">Send To Village</button>
        </form>
        <SmurfContext.Provider value={{smurfs}}>
          <SmurfVillage />
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
