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

    componentDidMount() {
        console.log(localStorage)
        let token = localStorage.getItem('jwtToken')
        setAuthToken(token);
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
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }

    displayUsers() {
        const displayUsers = this.state.data.users.map((u, idx) => {
            return (
                <UserCard key={idx} name={u.userName} photo={u.profilePic} address={u.address} phone={u.phone} />
            )
        });

        return displayUsers;
    }

    render() {
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
