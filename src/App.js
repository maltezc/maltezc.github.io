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
/* look at setting up AWS lamda functions for using in conjuction for email functionality */


export default App;
