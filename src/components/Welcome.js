import React from 'react';
import './Components.css'

const Welcome = () => {
    return (
        <div>
            <section className="hero is-medium">
                <div className="hero-body has-text-centered">
                    <h1 className="title is-2">Welcome to Mercers</h1>
                    <h2 className="title is-2">Please Signup or Login</h2>

                    {/* <div id="hero-input-group" className="field has-addons has-addons-centered">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder="What are you looking for today?" />
                            </div>
                            <div className="control">
                                <a className="button is-medium is-primary">
                                    <i className="fal fa-search"></i>
                                </a>
                            </div>
                        </div> */}
                </div>
            </section>

            <div className="container is-max-desktop">
                <section className="featured">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h2 className="subtitle">Items you can find in Mercers:</h2>
                            </div>
                        </div>
                        {/* <div className="level-right">
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
                        </div> */}
                    </div>
                    <div className="columns">
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-outdoor-furniture.jpg" />
                                </figure>
                                <h2 className="subtitle">Outdoor Furniture</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-lawn-equipment.jpg" />
                                </figure>
                                <h2 className="subtitle">Lawn Equipment</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/best-items-to-sell-yard-garage-sales-kids-toys.jpg" />
                                </figure>
                                <h2 className="subtitle">Children's Toys</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-costume-jewelry.jpg" />
                                </figure>
                                <h2 className="subtitle">Jewelry</h2>
                                <br />
                            </article>
                        </div>
                    </div>
                </section>
            </div>
            {/* <footer className="footer">
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
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
                            </a>
                        </p>
                    </div>
                </div>
            </footer> */}
        </div>
    )
}

export default Welcome;