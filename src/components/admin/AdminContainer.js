import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import Sidebar from '../sidebar/Sidebar';
import EventTable from '../events/EventTable';
import InfoTiles from '../info-tiles/InfoTiles';
import '../Components.css'
class Admin extends Component {

    render() {
        return (
            <div>
                <AdminNavbar />
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 ">
                            <Sidebar />
                        </div>
                        <div className="column is-9">
                            
                            <section>
                                <div className="card">
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input is-medium" type="text" placeholder="Quick Search" />
                                                <span className="icon is-medium is-left">
                                                    <i className="fa fa-search"></i>
                                                </span>
                                                <span className="icon is-medium is-right">
                                                    
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>                           

                            <EventTable />

                            <InfoTiles />                            
                            <section>
                                <div className="card">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Inventory Search
                                        </p>
                                        <a href="#" className="card-header-icon" aria-label="more options">
                                            <span className="icon">
                                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input is-large" type="text" placeholder="" />
                                                <span className="icon is-medium is-left">
                                                    <i className="fa fa-search"></i>
                                                </span>
                                                <span className="icon is-medium is-right">
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Admin;









