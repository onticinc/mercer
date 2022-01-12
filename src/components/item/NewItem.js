//components
import "../Components.css";
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saleNumber: 0,
            data: [],
            redirect: false,
        };
    }

    handleSaleNumber(e) {
        this.setState({
            saleNumber: e.target.value,
        });
    }

    handleItemName(e) {
        this.setState({
            itemName: e.target.value,
        });
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value,
        });
    }

    handleItemDescription(e) {
        this.setState({
            itemDescription: e.target.value,
        });
    }

    handleItemTags(e) {
        this.setState({
            itemTags: e.target.value,
        });
    }

    handleItemImage(e) {
        this.setState({
            itemImage: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
            saleNumber: this.state.saleNumber,
            itemName: this.state.itemName,
            price: this.state.price,
            itemDescription: this.state.itemDescription,
            itemTags: this.state.itemTags,
            itemImage: this.state.itemImage,
        };
        axios.post(`${REACT_APP_SERVER_URL}/users/item`, itemData)
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

    // Testing Dropdown
    componentDidMount() {
        console.log(localStorage) //Shows local token in console
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/item`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data //===> Where API data is actually stored
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    // displaySales() {
    //     const displaySale = this.state.data.map((sales, index) => {
    //         console.log(sales.response)
    //         return (
    //             <Item key={index} />
    //         );
    //     });

    //     return displaySale;
    // }

    render() {
        if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

        return (
            <>
                <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="title is-1">Mercer</h1>
                                    <h2 className="subtitle colored is-4">
                                        Create a New Item!
                                    </h2>
                                    <p id="smallText">
                                        Mercer provides a platform for Vendors to advertise their sales to a global audience.
                                    </p>
                                    <img
                                        src="https://i.imgur.com/gi4BvGD.png"
                                        alt="Mercer Logo"
                                    />
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="title is-4">Create an Item</h1>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <p>Select Sale Index - Minimum: 0</p>
                                                <input id="saleIndex" type="number" min="0" value={this.state.saleNumber} onChange={this.handleSaleNumber.bind(this)} />
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Name"
                                                    name="itemName"
                                                    value={this.state.itemName}
                                                    onChange={this.handleItemName.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Price"
                                                    name="price"
                                                    value={this.state.price}
                                                    onChange={this.handlePrice.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Description"
                                                    name="itemDescription"
                                                    value={this.state.itemDescription}
                                                    onChange={this.handleItemDescription.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Item Tags"
                                                    name="Tags"
                                                    value={this.state.itemTags}
                                                    onChange={this.handleItemTags.bind(this)}

                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="Image Link"
                                                    name="itemImage"
                                                    value={this.state.itemImage}
                                                    onChange={this.handleItemImage.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="button is-block is-primary is-fullwidth is-medium">
                                            Submit
                                        </button>
                                        <br />
                                        <a href="/home" className="button is primary is-fullwidth is-medium">Click Here to Return Home</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default NewItem;
