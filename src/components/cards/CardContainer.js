import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import '../Components.css';

class CardContainer extends Component {

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="section">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h1 className="title">Bulma Card Layout Template</h1><br />
                        </div>
                    </div>
                    <div className="row columns is-multiline">
                        <div v-for="card in cardData" key="card.id" className="column is-4">
                            <div className="card large">
                                <div className="card-image">
                                    <figure className="image is-16by9">
                                        <img src="https://bulma.io/images/placeholders/16x16.png" />
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
                                            <p className="title is-4 no-padding">Title</p>
                                            <p>
                                                <span className="title is-6">
                                                    <a> @userName </a> </span> </p>
                                            <p className="subtitle is-6">@Location</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        Description
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

export default CardContainer;