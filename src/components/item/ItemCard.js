import React, { Component } from 'react';


class ItemCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row columns is-multiline">
                        <div v-for="card in cardData" key="card.id" className="column is-4">
                            <div className="card large">
                                <div className="card-image">
                                    <figure className="image is-16by9">
                                        <img src={userImage} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src={itemImage} />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4 no-padding">{itemName}</p>
                                            <p>
                                                <span className="title is-6">
                                                    <a> {userName} </a>
                                                    <a> {saleName} </a>
                                                </span>
                                            </p>
                                            <p className="subtitle is-6">{price}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {itemImage}
                                        {itemDescription}
                                        {itemTags}
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