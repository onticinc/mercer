import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/Navbar';
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
        return (
            <div>
                <Navbar />
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <div className="box">
                            <figure className="avatar">
                                <img src="./logo.svg" style={{ width: '150px', height: '150px' }} alt="Logo" />
                            </figure>
                            <form>
                                <p className="subtitle has-text-black">Please login to proceed.</p>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-medium" type="email" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-medium" type="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="checkbox">
                                        <input type="checkbox" />
                                        <span className="m-l-5">Remember Me:</span>
                                    </label>
                                </div>
                                <button id="loginButton" className="button is-block is-info is-large is-fullwidth">Login Button<i className="fa fa-sign-in" aria-hidden="true"></i></button>
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
            </div>
        );
    }
}

export default Login;