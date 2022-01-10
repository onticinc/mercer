import axios from "axios";
import React, { Component } from "react";
import SaleCard from "./SaleCard";
const { REACT_APP_SERVER_URL } = process.env;


class ViewOtherSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/users/other-stuff`)
            .then((response) => {
                console.log("SEE THIS", response.data.user);
                this.setState({
                    data: response.data.user,
                });
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    displaySales() {
        console.log("LOOK AT THIS !!!!!", this.state.data[0]);
        const display = this.state.data.map((a, idx) => {
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
        });
        return display;
    }

    render() {
        return (
            <div>
                {this.displaySales()}
            </div>
        )
    }
}

export default ViewOtherSales;

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