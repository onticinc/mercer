import React, { Component } from 'react';
import '../Components.css';
class EventTable extends Component {

    render() {
        return (
            <div>
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
            </div>

        );
    }
}

export default EventTable;









