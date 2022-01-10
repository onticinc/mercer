import "../Components.css";

//components
import SaleCard from './SaleCard';
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class ViewYourSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    componentDidMount() {
        console.log(localStorage) //Shows local token in console
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/your-stuff`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                this.setState({
                    data: response.data.user
                })
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    displaySales() {
        const displaySale = this.state.data.sale.map((sale, index) => {
            console.log(sale)
            return (
                <SaleCard key={index} />
            );
        });

        return displaySale;
    }


    render() {
        if (this.state.redirect) return <Redirect to="/profile" />;

        return (
            <div>
                {this.displaySales()}
            </div>
        )
    }
}

export default ViewYourSale;
