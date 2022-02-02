import React, { Component } from 'react';


class ItemCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-4">
                <div className="card large">
                    <div className="card large">
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src={this.props.itemImage} alt="Item Image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img
                                            src="https://i.imgur.com/gi4BvGD.png"
                                            alt="Mercer Logo"
                                        />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4 no-padding">{this.props.itemName}</p>
                                    <p>
                                        <span className="title is-6">
                                            <p>${this.props.price}</p>
                                        </span>
                                    </p>
                                    <p className="subtitle is-6">{this.props.itemTags}</p>
                                </div>
                            </div>
                            <div className="content">
                                {this.props.itemDescription}
                            </div>
                            <div>
                                <a id="editProfile" className="button is-block is-fullwidth is-primary is-medium" href="/purchasepage">Purchase This Item<i className="fa fa-sign-in" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;