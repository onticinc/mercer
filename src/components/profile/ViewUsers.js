import "../Components.css";

//components
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import UserCard from "./UserCard";
const { REACT_APP_SERVER_URL } = process.env;

class ViewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // handleName(e) {
    //     this.setState({
    //         userName: e.target.value,
    //     });
    // }

    // handleSaleName(e) {
    //     this.setState({
    //         saleName: e.target.value,
    //     });
    // }

    // handleLocation(e) {
    //     this.setState({
    //         location: e.target.value,
    //     });
    // }

    // handleSaleImage(e) {
    //     this.setState({
    //         saleImage: e.target.value,
    //     });
    // }

    // handleSaleDescription(e) {
    //     this.setState({
    //         saleDescription: e.target.value,
    //     });
    // }

    // handleTime(e) {
    //     this.setState({
    //         time: e.target.value,
    //     });
    // }

    // handleDate(e) {
    //     this.setState({
    //         date: e.target.value,
    //     });
    // }

    // handleSaleTags(e) {
    //     this.setState({
    //         saleTags: e.target.value,
    //     });
    // }

    // handleZipCode(e) {
    //     this.setState({
    //         zipCode: e.target.value,
    //     });
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const saleData = {
    //         saleName: this.state.saleName,
    //         location: this.state.location,
    //         saleImage: this.state.saleImage,
    //         saleDescription: this.state.saleDescription,
    //         time: this.state.time,
    //         date: this.state.date,
    //         saleTags: this.state.saleTags,
    //         zipCode: this.state.zipCode,
    //     };
    //     axios.post(`${REACT_APP_SERVER_URL}/users/sale`, saleData)
    //         .then(response => {
    //             const { token } = response.data;
    //             // save token to localStorage
    //             localStorage.setItem('jwtToken', token);
    //             // set token to headers
    //             setAuthToken(token);
    //             // decode token to get the user data
    //             const decoded = jwt_decode(token);
    //             // set the current user
    //             this.props.nowCurrentUser(decoded); // funnction passed down as props.
    //         })
    //         .catch(error => {
    //             console.log('===> Error on login', error);
    //             alert('Either email or password is incorrect. Please try again');
    //         });
    // };

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

    displayUsers() {
        // const displayUsers = console.log('USERS TEST RESULTS', this.state.data)
        const displayUsers = this.state.data.users.map((u, idx) => {
            // console.log(sales.response)
            return (
                <UserCard key={idx} name={u.userName} photo={u.profilePic} address={u.address} phone={u.phone} />
            )
        });

        return displayUsers;
    }


    render() {
        // if (this.state.redirect) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)
        return (
            <div>
                <h1>This is the View Users Page</h1>
                <div className="usercontainer">
                    {!this.state.data.user ? <h1>Loading...</h1> : this.state.data.user.map((u, idx) => {
                        return (
                            <UserCard key={idx} name={u.userName} email={u.email} photo={u.profilePic} address={u.address} phone={u.phone} />
                            
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default ViewUsers;
