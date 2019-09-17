import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Thought from "./components/Thought";
import FilterLeft from "./components/FilterLeft";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
      <Thought />
      <FilterLeft />
    </Router>
  );
}

export default App;
