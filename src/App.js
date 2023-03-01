import React from "react";
import "./App.css";
import PWApp from "./PWApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PWApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
