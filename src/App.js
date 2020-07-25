import React from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <>
      <div className="App">Convert</div>
      <CurrencyRow />
        <div className='equals'>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
