import React, { Component } from 'react';

class SaleCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" className="column is-4">
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={this.props.saleImage} />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="https://i.imgur.com/gi4BvGD.png" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">{this.props.saleName}</p>
                                                <p>
                                                    <span className="title is-6">
                                                        <p> {this.props.location}</p>
                                                        <p> {this.props.time}</p>
                                                        <p> {this.props.date}</p>
                                                    </span>
                                                </p>
                                                <p className="subtitle is-6">{this.props.saleTags}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {this.props.saleDescription}
                                            <div className="background-icon"><span className="icon-twitter"></span></div>
                                        </div>
                                        <div className="content">
                                            {this.props.item}
                                            <div className="background-icon"><span className="icon-twitter"></span></div>
                                        </div>
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

export default SaleCard;