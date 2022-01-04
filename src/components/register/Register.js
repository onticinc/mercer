import React, { Component } from 'react';
import '../Components.css'
import Navbar from '../navbar/Navbar';
class Register extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="columns is-multiline" style={{padding: '20px'}}>
                    <div className="column is-8 is-offset-2 register">
                        <div className="columns">
                            <div className="column left">
                                <img src="./plangig_logo.png" style={{width: '250px', height: '250px'}} />
                            </div>
                            <div className="column right has-text-centered">
                                <h1 className="title is-4">Sign up today!</h1>
                                
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <input id="userName" className="input is-medium" type="text" placeholder="@User-Name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-medium" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-fullwidth is-medium" alt="submit button">Submit</button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="column is-8 is-offset-2">
               
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;