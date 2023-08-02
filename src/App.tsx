import React from "react";
import "./App.css";
import { Footer } from "./Footer";

const name = 'Max';
const App = () => (
  <div className="App">
    <h1>Hello, {name}!</h1>
    <Footer copyright="Created by Gastello" />
  </div>
);

export default App;
