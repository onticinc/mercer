import React, { Component } from 'react';
import '../Components.css'

class AdminNavbar extends Component {

    render() {
        return (
            <div>
                {/* < !--START NAV-- > */}
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="./">
                                <h1>PlanGig.com</h1>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
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
                {/*<!--END NAV-- > */}
            </div>
        );
    }
}

export default AdminNavbar;








