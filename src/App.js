import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// components
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CardContainer from "./components/cards/CardContainer";
import HomeContainer from "./components/home/HomeContainer";


class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/card" element={<CardContainer />}/>
          <Route path="/home" element={<HomeContainer />}/>
        </Routes>
       </div>
     </Router>
    );
  }
}

export default App;