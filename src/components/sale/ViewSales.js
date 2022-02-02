import axios from "axios";
import React, { Component } from "react";
import SaleCard from "./SaleCard";
const { REACT_APP_SERVER_URL } = process.env;


class ViewSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userIndex: 0,
            users: [],
        };
    }

    handleUserNumber(e) {
        this.setState({
            userIndex: e.target.value,
        });
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/users/other-stuff`)
            .then((response) => {
                let users = response.data.user;
                this.setState({
                    users: users,
                });
            })
            .catch((error) => {

            })
    }

    displaySales() {
        const display = !this.state.users[this.state.userIndex] ? <h1>There is no User of this Index</h1> : this.state.users[this.state.userIndex].sale.map((a, idx) => {
            return (
                <SaleCard
                    key={idx}
                    saleName={a.saleName}
                    location={a.location}
                    saleImage={a.saleImage}
                    saleDescription={a.saleDescription}
                    time={a.time}
                    date={a.date}
                    saleTags={a.saleTags}
                    zipCode={a.zipCode}
                />
            )
        })
        return display;
    }

    render() {
        return (
            <div className="container">
                <h1 id="topTitle">User Index - Minimum: 0</h1>
                <input id="topInput" type="number" min="0" value={this.state.userIndex} onChange={this.handleUserNumber.bind(this)} />
                <div className="section">
                    <div className="row columns is-multiline">
                        {this.displaySales()}
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default ViewSales;