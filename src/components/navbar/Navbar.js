import React, { Component } from 'react';
import '../Components.css';
class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#">
                            <img src="https://bulma.io/images/placeholders/48x48.png" alt="Logo"/>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a href="/"className="navbar-item is-active">
                                    Home
                                </a>
                                <a href=""className="navbar-item">
                                    Examples
                                </a>
                                <a className="navbar-item">
                                    Features
                                </a>
                                <a className="navbar-item">
                                    Team
                                </a>
                                <a href="/register" className="navbar-item">
                                    Register
                                </a>
                                <a href="/login" className="navbar-item">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbar;