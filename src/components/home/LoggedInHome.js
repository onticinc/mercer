import React from 'react';
import '../Components.css'

const LoggedInHome = () => {
    return (
        <div>
            <section className="buttonSection">
                <a className="button is-primary" id="button1" type="button">Find Sales</a>
                <a className="button is-info" id="button2" type="button" href="/newsale">Create New Sale</a>
            </section>

            <div className="container is-max-desktop">
                <section className="featured">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h2 className="subtitle">Items availabe on Mercer:</h2>
                            </div>
                        </div>
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
        </div>
    )
}

export default LoggedInHome;