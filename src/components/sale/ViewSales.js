import React from "react";
import { Link } from 'react-router-dom';
import SaleCard from "./SaleCard";
import ViewSale from "./ViewSale";
// import SaleCard from "./SaleCard";

const ViewSales = (props) => {
    const { handleLogout, user } = props;
    const { userName, item, profilePic, address, sale, phone, password, exp } = user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();

    // make a condition that compares exp and current time
    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
    }

    const salesData = user ?
        (
            <div>
                <SaleCard />
            </div>
        ) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div className="text-center pt-4">
            {user ? salesData : errorDiv()}
        </div>
    );

}



export default ViewSales;