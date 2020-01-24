import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./views/Main";
import AddQ from "./views/AddQ";
import PlayG from "./views/PlayG";
import Logout from "./views/Logout";
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddQ path="/new_question" />
        <PlayG path="/lets_play" />
        <Logout path="/logged_out" />
      </Router>
    </div>
  );
}

export default App;
