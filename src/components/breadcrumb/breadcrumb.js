import React, { Component } from 'react';
import '../Components.css'
class Breadcrumb extends Component {

    render() {
        return (
            <div>
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="../">Bulma</a></li>
                        <li><a href="../">Templates</a></li>
                        <li><a href="../">Examples</a></li>
                        <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Breadcrumb;