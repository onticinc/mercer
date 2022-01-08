// Imports
import React, { useEffect, useState, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Welcome from './components/home/Welcome';
import LoggedInHome from './components/home/LoggedInHome';


import CreateSale from './components/sale/CreateSale';
import SaleCard from './components/sale/SaleCard';
import EditSale from './components/sale/EditSale';
import ViewSale from './components/sale/ViewSale';

import CreateItem from './components/item/CreateItem';
import ItemCard from './components/item/ItemCard';




const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}
// Research Expansion opperators
// Researcg Spread Opperator

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      // console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path='/signup' component={Signup} />
          <Route
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
          />
          <Route path="/about" component={About} />
          <PrivateRoute path="/home" component={LoggedInHome} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
    
          <PrivateRoute path="/viewitem" component={ItemCard} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/item" component={CreateItem} user={currentUser} handleLogout={handleLogout} />
          
          <PrivateRoute path="/editsale" component={EditSale} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/viewsale" component={ViewSale} user={currentUser} handleLogout={handleLogout} />
          <PrivateRoute path="/newsale" component={CreateSale} user={currentUser} handleLogout={handleLogout} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
