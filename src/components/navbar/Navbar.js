import React, { Component } from 'react';
import '../Components.css'
class Navbar extends Component {

    render() {
        return (
            <div>
               <nav className="navbar">
                    <div className="container">
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a href="/home" className="navbar-item is-active">Home</a>
                                <a href="/admin" className="navbar-item is-active">Admin</a>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">Login</a>
                                    <div className="navbar-dropdown">             
                                        <a href="/login" className="navbar-item">Login</a>
                                        <a href="/register" className="navbar-item">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> 
            </div>
        );
    }
}

export default Navbar;