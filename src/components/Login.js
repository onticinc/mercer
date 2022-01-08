import "./Login.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
      .then(response => {
        const { token } = response.data;
        // save token to localStorage
        localStorage.setItem('jwtToken', token);
        // set token to headers
        setAuthToken(token);
        // decode token to get the user data
        const decoded = jwt_decode(token);
        // set the current user
        this.props.nowCurrentUser(decoded); // funnction passed down as props.
      })
      .catch(error => {
        console.log('===> Error on login', error);
        alert('Either email or password is incorrect. Please try again');
      });
  };

  render() {
    if (this.props.user) return <Redirect to="/loggedinhome" />; // You can have them redirected to profile (your choice)

    return (
      <>
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <figure className="avatar">
                <img src="https://i.imgur.com/gi4BvGD.png" style={{ width: '150px', height: '150px' }} alt="Logo" />
              </figure>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium is-rounded"
                      type="email"
                      placeholder="hello@example.com"
                      autocomplete="username"
                      value={this.state.email}
                      onChange={this.handleEmail.bind(this)}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium is-rounded"
                      type="password"
                      placeholder="**********"
                      autocomplete="current-password"
                      value={this.state.password}
                      onChange={this.handlePassword.bind(this)}
                      required
                    />
                  </div>
                </div>
                <br />
                <button
                  className="button is-block is-fullwidth is-primary is-medium is-rounded"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p>
                <div className="container">
                  <div className="row">
                    <hr className="login-hr" />
                    <a href="../register">Sign Up</a>
                  </div>
                  <div className="row">
                    <a href="../">Forgot Password</a>
                  </div>

                  <div className="row">
                    <a href="../">Need Help?</a>
                  </div>
                </div>
              </p>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Login;
