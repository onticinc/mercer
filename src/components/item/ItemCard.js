import React, { Component } from 'react';


class ItemCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" className="column is-4">
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={this.props.itemImage} />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src={this.props.itemImage} />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">{this.props.itemName}</p>
                                                <p>
                                                    <span className="title is-6">
                                                        <p> {this.props.price}</p>
                                                        <p> {this.props.itemDescription}</p>
                                                    </span>
                                                </p>
                                                <p className="subtitle is-6">{this.props.itemTags}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {this.props.itemTags}
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

export default ItemCard;