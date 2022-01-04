import React, { Component } from 'react';
import '../Components.css';
class InfoTiles extends Component {

    render() {
        return (
            <div>
                <section className="info-tiles">
                    <div className="row">
                        <div className="tile is-ancestor has-text-centered">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">48</p>
                                    <p className="subtitle">Confirmed Events</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">24</p>
                                    <p className="subtitle">Pending Events</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">78,550</p>
                                    <p className="subtitle">Year To Date</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">38,200</p>
                                    <p className="subtitle">Accounts Recievable</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default InfoTiles;









