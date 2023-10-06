// App.js

import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CelComp from './celCom';
import FahComp from './fahCom'

function App() {
  const [cels, setCels] = useState(0);
  const [fehri, setFehri] = useState(0);
  const [error, setError] = useState(false);


  
  function celToFahr(e) {
    if(cels !=="" || isNaN(e.target.value)){
      let fehr = 32 + (cels * 9) / 5;
        setError(isNaN(e.target.value))
        setCels(e.target.value);
        setFehri(fehr);}
    else{
      setError(isNaN(e.target.value))
        setCels(null);
        setFehri(""); 
    }
  }


  function fahrToCel(e) {
    if(fehri !=="" || !isNaN(e.target.value)){
      setError(isNaN(e.target.value))
    let cele = (e.target.value - 32) / (9 / 5);
      setFehri(e.target.value);
      setCels(cele);
  }else{
    setError(isNaN(e.target.value))
      setFehri("");
      setCels("")
    }
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Temperature Converter</h1>
        {error && <div className="alert alert-danger">Error</div>}
        <div className="input-container" >
          < CelComp val={cels} handleChange={celToFahr}/>
          <h2>=</h2>
          <FahComp val={fehri} handleChange={fahrToCel}/>
        </div>
      </div>
    </div>
  );
}

export default App;
