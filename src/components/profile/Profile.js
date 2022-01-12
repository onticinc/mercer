import '../Components.css';
import React, { Component } from "react";
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class Profile extends Component {
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
    axios.get(`${REACT_APP_SERVER_URL}/users/your-stuff`,
      {
        header: { 'Access-Control-Allow-Origin': '*' }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data.user
        })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  }

  render() {
    return (
      <div>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h1 id="profileTitle">Welcome to your Profile!</h1>
                <div className="box" id="profileForm">
                  <figure className="avatar">
                    <img src={this.state.data.profilePic} style={{ width: '150px', height: '150px' }} alt="Profile Pic" />
                  </figure>
                  <form>
                    <div className="content">
                      <table className="table-profile">
                        <tr>
                          <td>Name: {this.state.data.userName}</td>
                        </tr>
                        <tr>
                          <td>Email: {this.state.data.email}</td>
                        </tr>
                        <tr>
                          <td>Phone Number: {this.state.data.phone}</td>
                        </tr>
                        <tr>
                          <td>Address: {this.state.data.address}</td>
                        </tr>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default Profile;