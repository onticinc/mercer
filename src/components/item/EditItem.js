import "../Components.css";

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
            sale: [],
            data: [],
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
        const saleData = {
            saleName: this.state.saleName,
            location: this.state.location,
            saleImage: this.state.saleImage,
            saleDescription: this.state.saleDescription,
            time: this.state.time,
            date: this.state.date,
            saleTags: this.state.saleTags,
            zipCode: this.state.zipCode,
        };
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

    componentDidMount() {
        console.log(localStorage) //Shows local token in console
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/sale`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                console.log(response.data.user);
                console.log(this.state.data);
                let emptyData = this.state.data
                let saleData = response.data.user
                emptyData.push(saleData);
                console.log('AFTER PUSH', emptyData);
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    displaySales() {
        const displaySale = console.log('TESTING DISPLAY', this.state.data)
        // const displaySale = this.state.data.map((sales, index) => {
        //     console.log(sales.response)
        //     return (
        //         <Sale key={index} />
        //     );
        // });

        return displaySale;
    }


    render() {
        if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

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
                                    <h1 className="title is-4">Edit Sale</h1>
                    
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input is-medium"
                                                    type="text"
                                                    placeholder="{saleName}"
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
                                                    placeholder="{location}"
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
                                                    placeholder="{saleImage}"
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
                                                    placeholder="{saleDescription}"
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
                                                    placeholder="{Time}"
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
                                                    placeholder="{Date}"
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
                                                    placeholder="{Tag(s)}"
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
                                                    placeholder="{Zip Code}"
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
