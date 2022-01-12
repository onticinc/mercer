import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="usercontainer">
                    <div className="section">
                        <div className="row columns is-multiline">
                            <div v-for="card in cardData" key="user.id" className="column is-4">
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={this.props.photo} alt="User Photo" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="https://i.imgur.com/gi4BvGD.png" alt="Mercer Logo" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">Mercer: {this.props.name}</p>
                                                <br />
                                                <p>
                                                    <span className="title is-6">
                                                        <a> {this.props.address} </a>
                                                        <br />
                                                        <a> {this.props.phone} </a>
                                                        <br />
                                                        <a> {this.props.email}</a>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {/* Could add a user bio here if we want */}
                                            <div className="background-icon"><span className="icon-twitter"></span></div>
                                        </div>
                                        <div>
                                            <a id="viewSales" className="button is-block is-fullwidth is-info is-medium m-t-15" href="/viewsales">View Sales<i className="fa fa-sign-in" aria-hidden="true"></i></a>
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

export default UserCard;