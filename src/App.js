import React from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <>
      <div className="App">Convert</div>
      <CurrencyRow />
        <div>=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
