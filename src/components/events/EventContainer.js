import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import '../Components.css'

class EventContainer extends Component {

    render() {
        return (
            <div>
                
                <div className="container" style={{ paddingTop: '10px' }}>
                    <div className="columns">
                        <div className="column is-3 ">
                            <Sidebar />
                        </div>
                        <div className="column is-9">

                            <section className="hero is-info welcome is-small m-t-15">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">
                                            Dashboard
                                        </h1>
                                        <h2 className="subtitle">
                                            {/* I hope you are having a great day! */}
                                        </h2>
                                    </div>
                                </div>
                            </section>
                            
                            <section>
                                <div className="card">
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input is-large" type="text" placeholder="" />
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

                            <section>
                                <div className="card events-card" >
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Upcoming Events
                                        </p>
                                    </header>
                                    <div className="card-table">
                                        <div className="content">
                                            <table className="table is-fullwidth is-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Reminder</th>
                                                        <th>Date</th>
                                                        <th>Name</th>
                                                        <th>Assigned To</th>
                                                        <th>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                        <td>8-10-22</td>
                                                        <td>Johnson Wedding</td>
                                                        <td>Eric Steveson</td>
                                                        <td className="level"><a className="button is-small is-info" href="#">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                        <td>8-10-22</td>
                                                        <td>First National Bank Holiday Party</td>
                                                        <td>Scott Dulin</td>
                                                        <td className="level"><a className="button is-small is-info" href="#">View</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="#" className="card-footer-item">View All</a>
                                    </footer>
                                </div>
                            </section>

                            <section className="info-tiles">
                                <div className="row">
                                    <div className="tile is-ancestor has-text-centered">
                                        <div className="tile is-parent">
                                            <article className="tile is-child box">
                                                <p className="title">439k</p>
                                                <p className="subtitle">Users</p>
                                            </article>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child box">
                                                <p className="title">59k</p>
                                                <p className="subtitle">Products</p>
                                            </article>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child box">
                                                <p className="title">3.4k</p>
                                                <p className="subtitle">Open Orders</p>
                                            </article>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child box">
                                                <p className="title">19</p>
                                                <p className="subtitle">Exceptions</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
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

export default EventContainer;









