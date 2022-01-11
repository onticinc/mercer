import "../Components.css";

import React, { Component } from "react";
import axios from "axios";
import setAuthToken from '../../utils/setAuthToken';
import ItemCard from "./ItemCard";
const { REACT_APP_SERVER_URL } = process.env;

class ViewItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log(localStorage) //Shows local token in console
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/other-stuff`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                this.setState({
                    data: response.data
                })
                console.log(response.data.user);
                console.log(this.state.data);
                // let emptyData = this.state.data
                // let userData = response.data.user
                // emptyData.push(saleData);
                // console.log('AFTER PUSH', emptyData);
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    render() {
        return (
            <div>
                <h1>This is the View Items Page</h1>
                <ItemCard />
            </div>
        )
    }

}

export default ViewItems;