import "../Components.css";

//components
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import ItemCard from './ItemCard.js';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class ViewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            item: [],
            data: [],
            redirect: false,
        };
    }


    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/users/item`)
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

    displayItem() {
        const display = this.state.data.map((i, index) => {
            console.log(item.response)
            return (
                <ItemCard
                    key={index}
                    itemName={i.itemName}
                    price={i.price}
                    itemDescription={i.descrption}
                    itemTags={i.itemTags}
                    itemImage={i.itemImage}
                />
            );
        });

        return display;
    }


    render() {
        if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

        return (
            <>

                <ItemCard key={idx} itemName={itemName} />

            </>
        );
    }
}

export default ViewItem;
