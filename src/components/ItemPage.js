import React, { Component } from 'react';


class ViewSingleItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h1 className="title">Item View</h1><br />
                        </div>
                    </div>
                    <div className="row columns is-multiline">
                        <div v-for="card in cardData" key="card.id" className="column">
                            <div className="card large">
                                <div className="card-image">
                                    <figure className="image is-16by9">
                                        <img src="https://bulma.io/images/placeholders/16x16.png" alt="itemPage" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src="https://bulma.io/images/placeholders/48x48.png" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4 no-padding">Item Name</p>
                                            <p>
                                                <span className="title is-6">
                                                    <a> Item Price </a> </span> </p>

                                            <p className="subtitle is-6">Item Tag</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Item Description
                                        <div className="background-icon"><span className="icon-twitter"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSingleItem;