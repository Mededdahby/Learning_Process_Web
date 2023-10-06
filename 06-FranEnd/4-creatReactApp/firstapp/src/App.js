import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import input from '/components/input';
import output from '/components/output';
function App() {
  let {text , setText}= useState("Hello");
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e)=>setText(e.target.value)}
        type="text" />
        <label>{input}</label>
      </header>
    </div>
  );
}

export default App;
