import "./Signup.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class createSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            sale: [],
            redirect: false,
        };
    }

    handleName(e) {
        this.setState({
            userName: e.target.value,
        });
    }

    handleSaleName(e) {
        this.setState({
            saleName: e.target.value,
        });
    }

    handleLocation(e) {
        this.setState({
            location: e.target.value,
        });
    }

    handleSaleImage(e) {
        this.setState({
            saleImage: e.target.value,
        });
    }

    handleSaleDescription(e) {
        this.setState({
            saleDescription: e.target.value,
        });
    }

    handleTime(e) {
        this.setState({
            time: e.target.value,
        });
    }

    handleDate(e) {
        this.setState({
            date: e.target.value,
        });
    }

    handleSaleTags(e) {
        this.setState({
            saleTags: e.target.value,
        });
    }

    handleZipCode(e) {
        this.setState({
            zipCode: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const saleData = [{
            saleName: this.state.saleName,
            location: this.state.location,
            saleImage: this.state.saleImage,
            saleDescription: this.state.saleDescription,
            time: this.state.time,
            date: this.state.date,
            saleTags: this.state.saleTags,
            zipCode: this.state.zipCode,
        }];
        axios.post(`${REACT_APP_SERVER_URL}/users/sale`, saleData)
            .then(response => {
                const { token } = response.data;
                // save token to localStorage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                // set the current user
                this.props.nowCurrentUser(decoded); // funnction passed down as props.
            })
            .catch(error => {
                console.log('===> Error on login', error);
                alert('Either email or password is incorrect. Please try again');
            });
    };

    render() {
        if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

        return (
            <>
                <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="title is-1">Super Cool Website</h1>
                                    <h2 className="subtitle colored is-4">
                                        Lorem ipsum dolor sit amet.
                                    </h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Corporis ex deleniti aliquam tempora libero excepturi vero
                                        soluta odio optio sed.
                                    </p>
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="title is-4">Create a Sale</h1>
                                    <p className="description">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                                    </p>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Sale Name"
                                                    name="saleName"
                                                    value={this.state.saleName}
                                                    onChange={this.handleSaleName.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Location"
                                                    name="location"
                                                    value={this.state.location}
                                                    onChange={this.handleLocation.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Picture URL"
                                                    name="image"
                                                    value={this.state.saleImage}
                                                    onChange={this.handleSaleImage.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={this.state.saleDescription}
                                                    onChange={this.handleSaleDescription.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Time"
                                                    name="time"
                                                    value={this.state.time}
                                                    onChange={this.handleTime.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Date"
                                                    name="date"
                                                    value={this.state.date}
                                                    onChange={this.handleDate.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Tag(s)"
                                                    name="saleTags"
                                                    value={this.state.saleTags}
                                                    onChange={this.handleSaleTags.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Zip Code"
                                                    name="zipCode"
                                                    value={this.state.zipCode}
                                                    onChange={this.handleZipCode.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="button is-block is-primary is-fullwidth is-medium">
                                            Submit
                                        </button>
                                        <br />
                                        <small>
                                            <em>Lorem ipsum dolor sit amet consectetur.</em>
                                        </small>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="column is-8 is-offset-2">
                            <br />
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="fab fa-twitter"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-facebook"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-instagram"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>{" "}
                                        &emsp;
                                        <span className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <small
                                        className="level-item"
                                        style={{ color: "var(--textLight)" }}
                                    >
                                        &copy; Super Cool Website. 2022 All Rights Reserved.
                                    </small>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default createSale;
