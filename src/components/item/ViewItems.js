import axios from "axios";
import React, { Component } from "react";
import ItemCard from "./ItemCard";
const { REACT_APP_SERVER_URL } = process.env;


class ViewItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIndex: 0,
            saleIndex: 0,
            users: [],
        };
    }

    handleUserNumber(e) {
        this.setState({
            userIndex: e.target.value,
        });
    }

    handleSaleNumber(e) {
        this.setState({
            saleIndex: e.target.value,
        });
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/users/other-stuff`)
            .then((response) => {
                let users = response.data.user;
                let sales = response.data.user.sale;
                this.setState({
                    users: users,
                    sales: sales,
                });
                
            })
            .catch((error) => {
                
            })
    }

    displayItems() {
        if (!this.state.users[this.state.userIndex]) {
            return <h1>There are no Users this Index</h1>
        } else {
            if (!this.state.users[this.state.userIndex].sale[this.state.saleIndex]) {
                return <h1>There are no Sales of this Index</h1>
            } else {
                return this.state.users[this.state.userIndex].sale[this.state.saleIndex].item.map((a, idx) => {
                    return (
                        <ItemCard
                            key={idx}
                            itemName={a.itemName}
                            price={a.price}
                            itemDescription={a.itemDescription}
                            itemTags={a.itemTags}
                            itemImage={a.itemImage}
                        />
                    )
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h1 id="topTitle">User Index - Minimum: 0</h1>
                <input id="topInput" type="number" min="0" value={this.state.userIndex} onChange={this.handleUserNumber.bind(this)} />
                <h1 id="topTitle">Sale Index - Minimum: 0</h1>
                <input id="topInput" type="number" min="0" value={this.state.saleIndex} onChange={this.handleSaleNumber.bind(this)} />
                {this.displayItems()}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div >
        )
    }
}

export default ViewItems;