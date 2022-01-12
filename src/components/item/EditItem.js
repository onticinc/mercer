import "../Components.css";
// pull test
//components
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            item: [],
            data: [],
            redirect: false,
        };
    }

    handleName(e) {
        this.setState({
            userName: e.target.value,
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

    handleitemDescription(e) {
        this.setState({
            itemDescription: e.target.value,
        });
    }

    handleSaleDescription(e) {
        this.setState({
            saleDescription: e.target.value,
        });
    }

    handleItemTags(e) {
        this.setState({
            itemTags: e.target.value,
        });
    }

    handleDate(e) {
        this.setState({
            date: e.target.value,
        });
    }

    handleItemImage(e) {
        this.setState({
            itemTags: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
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
                this.props.nowCurrentUser(decoded); // function passed down as props.
            })
            .catch(error => {
                console.log('===> Error on login', error);
                alert('Either email or password is incorrect. Please try again');
            });
    };

    componentDidMount() {
        console.log(localStorage) //Shows local token in console
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/item`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                console.log(response.data.user);
                console.log(this.state.data);
                let emptyData = this.state.data
                let itemData = response.data.user
                emptyData.push(itemData);
                console.log('AFTER PUSH', emptyData);
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    displaySales() {
        const displayItem = console.log('TESTING DISPLAY', this.state.data)
        // const displaySale = this.state.data.map((sales, index) => {
        //     console.log(sales.response)
        //     return (
        //         <Sale key={index} />
        //     );
        // });

        return displayItem;
    }

    render() {
        if (this.state.redirect) return <Redirect to="/item" />; // You can have them redirected to profile (your choice)

        return (
            <>
                <section className="container">
                    <div className="columns is-multiline">
                        <div className="column is-8 is-offset-2 register">
                            <div className="columns">
                                <div className="column left">
                                    <h1 className="title is-1">{this.displaySales()}</h1>
                                    <iframe width="300" height="248" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=248&amp;hl=en&amp;q=151%20S%20Main%20Pocatello+(My%20Sale)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=828e8cd6faabae05b589f5b4a490c2c83b528345'></script>
                                </div>
                                <div className="column right has-text-centered">
                                    <h1 className="title is-4">Edit Item</h1>
                    
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="{itemName}"
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
                                                    placeholder="{price}"
                                                    name="location"
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
                                                    placeholder="{saleImage}"
                                                    name="image"
                                                    value={this.state.itemDescription}
                                                    onChange={this.handleitemDescription.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="{itemTags}"
                                                    name="description"
                                                    value={this.state.itemTags}
                                                    onChange={this.handleItemTags.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="{itemImage}"
                                                    name="time"
                                                    value={this.state.itemImage}
                                                    onChange={this.handleItemImage.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="button is-block is-primary is-fullwidth is-medium">
                                            Submit
                                        </button>
        
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

export default EditItem;
