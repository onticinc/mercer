import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// components
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CardContainer from "./components/cards/CardContainer";


class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/card" element={<CardContainer />}/>
        </Routes>
       </div>
     </Router>
    );
  }
}

export default App;