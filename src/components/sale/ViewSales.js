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
                console.log('ERROR', error)
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
            <div>
                <input type="number" min="0" value={this.state.userIndex} onChange={this.handleUserNumber.bind(this)} />
                {this.displaySales()}
            </div>
        )
    }
}

export default ViewSales;

/********************************************************/
// const ViewOtherSales = (props) => {
//     const { handleLogout, user } = props;
//     const { userName, item, profilePic, address, sale, phone, password, exp } = user;
//     const expirationTime = new Date(exp * 1000);
//     let currentTime = Date.now();

//     // make a condition that compares exp and current time
//     if (currentTime >= expirationTime) {
//         handleLogout();
//         alert('Session has ended. Please login to continue.');
//     }

//     const salesData = user ?
//         (
//             <div>
//                 <SaleCard />
//             </div>
//         ) : <h2>Loading...</h2>

//     return (
//         <div className="text-center pt-4">
//             {salesData}
//         </div>
//     );

// }
/********************************************************/