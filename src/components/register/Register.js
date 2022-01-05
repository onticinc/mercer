import React, { Component } from 'react';
import '../Components.css';
import Navbar from '../navbar/Navbar';
class Register extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="columns is-multiline">
                    <div className="column is-8 is-offset-2 register">
                        <div className="columns">
                            <div className="column left">
                                <img src="./plangig_logo.png" style={{width: '250px', height: '250px'}} />
                            </div>
                            <div className="column right has-text-centered">
                                <h1 className="title is-4">Register for your free Mercer Trading Account!</h1>
                                
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <input id="userName" className="input is-medium" type="text" placeholder="Username" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-medium" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth is-medium" alt="submit button">Let's Go!</button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="column is-8 is-offset-2">
               
                    </div>
                </div>
                <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <div className="links">

                            <div className="level-item">
                                <a href="#">Contact</a>
                            </div>
                            <div className="level-item">
                                <a href="#">Careers</a>
                            </div>
                            <div className="level-item">
                                <a href="#">Legal</a>
                            </div>
                        </div><br />
                        <p>
                            {/* <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                            </a> */}
                        </p>
                    </div>
                </div>
            </footer>
            
            </div>
            
        );
    }
}

export default Register;