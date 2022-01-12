import '../Components.css';
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      redirect: false,
    };
  }

  handleName(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handleProfilePic(e) {
    this.setState({
      profilePic: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    // make sure password and confirm password are equal
    // password length >= 8 characters
    if (this.state.password === this.state.confirmPassword && this.state.password.length >= 8) {
      const newUser = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        profilePic: this.state.profilePic,
        address: this.state.address,
        phone: this.state.phone,

        // ADD extra profile info here

      };
      axios
        .post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
        .then((response) => {
          this.setState({
            redirect: true,
          });
        })
        .catch((error) => console.log("===> Error in Signup", error));
    } else {
      if (this.state.password !== this.state.confirmPassword)
        return alert("Passwords don't match");
      alert("Password needs to be at least 8 characters. Please try again.");
    }
  };

  render() {
    if (this.state.redirect) return <Redirect to="/login" />; // You can have them redirected to profile (your choice)

    return (
      <>
        <section className="container m-t-30">
          <div className="columns is-multiline" id="column2">
            <div className="column is-8 is-offset-2 register m-t-30">
              <div className="columns">
                <div className="column left">
                  <h1 className="title is-1">Mercer</h1>
                  <h2 className="subtitle colored is-4">
                    Become a Vendor Today!
                  </h2>
                  <p id="smallText">
                    Mercer provides a platform for Vendors to advertise their sales to a global audience.
                  </p>
                  <img src="https://i.imgur.com/gi4BvGD.png" alt="Mercer Logo" />
                </div>
                <div className="column right has-text-centered">
                  <h1 className="title is-4 m-t-15">Create Your Account</h1>
                  <p className="description">
                    Please fill out everything below.
                  </p>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleName.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Profile Picture URL"
                          name="profilePic"
                          value={this.state.profilePic}
                          onChange={this.handleProfilePic.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleEmail.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={this.state.address}
                          onChange={this.handleAddress.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="phone"
                          placeholder="Phone Number"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handlePhone.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handlePassword.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="password"
                          placeholder="Confirm PW"
                          name="confirmPassword"
                          value={this.state.confirmPassword}
                          onChange={this.handleConfirmPassword.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="button is-block is-fullwidth is-primary is-medium">
                      Submit
                    </button>
                    <br />
                    <p>Do not sell anything illegal under U.S. law</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Signup;
