import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Thought from "./components/Thought";
import FilterLeft from "./components/FilterLeft";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from './components/Loading'

function App() {
  return (
    <Router>
      <Menu />
      <FilterLeft />
    </Router>
  );
}

export default App;
