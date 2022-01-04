import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

class Login extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4">
                                <div className="box">
                                    <figure className="avatar">
                                        <img src="./plangig_logo.svg" style={{width: '150px', height: '150px'}} alt="Plangig Logo" />
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
                                                <input type="checkbox"/>
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
                </section>
            </div>
        );
    }
}

export default Login;