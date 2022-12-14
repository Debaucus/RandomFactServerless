import logo from "./logo.svg";
import "./App.css";
import { FactArray } from "./components/factArray";
import { useState } from "react";

function App() {
  let factNumber = Math.floor(Math.random() * FactArray.length);

  const [newFact, setNewFact] = useState(FactArray[factNumber]);

  function handleClick() {
    setNewFact(FactArray[Math.floor(Math.random() * FactArray.length)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Random Fact Generator</h1>
        <p>{newFact}</p>
        <button onClick={handleClick}>New Fact</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
