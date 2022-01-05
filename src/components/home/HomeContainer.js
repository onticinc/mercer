import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';


class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Navbar />
        
                <section className="hero is-medium">
                    <div className="hero-body has-text-centered">
                        <h1 className="title is-2">Thousands of hidden gems, all in one place.</h1>
                        <div id="hero-input-group" className="field has-addons has-addons-centered">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder="What are you looking for today?" />
                            </div>
                            <div className="control">
                                <a className="button is-medium is-primary">
                                    <i className="fal fa-search"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container is-max-desktop">
                    <section className="featured">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <h2 className="subtitle">Featured Mercer Sellers</h2>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="field has-addons has-addons-centered">
                                        <div className="control">
                                            <a className="button is-small" disabled>
                                                <i className="far fa-chevron-left"></i>
                                            </a>
                                        </div>
                                        <div className="control">
                                            <a className="button is-small">
                                                <i className="far fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle">Creating a Group</h2>
                                    <span className="tag is-rounded">Users & Groups</span>
                                </article>
                            </div>
                            <div className="column is-3">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle">Downloading/Printing Your Invoices</h2>
                                    <span className="tag is-rounded">Billing & Accounts</span>
                                </article>
                            </div>
                            <div className="column is-3">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle">Changing the Account Owner</h2>
                                    <span className="tag is-rounded">Billing & Accounts</span>
                                </article>
                            </div>
                            <div className="column is-3">
                                <article>
                                    <figure className="image is-5by3">
                                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                    </figure>
                                    <h2 className="subtitle">Adding Internal Notes</h2>
                                    <span className="tag is-rounded">Billing & Accounts</span>
                                </article>
                            </div>
                        </div>
                    </section>
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
            </div >
        );
    }
}

export default HomeContainer;