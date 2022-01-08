import React from "react";
import { Link } from 'react-router-dom';



const ViewItems = (props) => {
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
        <div className="container">
            <div className="section">
                <div className="row columns is-multiline">
                    <div v-for="card in cardData" key="card.id" className="column is-4">
                        <div className="card large">
                            <div className="card-image">
                                <figure className="image is-16by9">
                                    <img src="https://bulma.io/images/placeholders/16x16.png" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/48x48.png" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4 no-padding">Item Name Here</p>
                                        <p>
                                            <span className="title is-6">
                                                <a> @userName </a>
                                                <a> Sale Name </a>
                                            </span> 
                                        </p>
                                        <p className="subtitle is-6">Price Here</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Description
                                    <div className="background-icon"><span className="icon-twitter"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ): <h2>Loading...</h2>

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



export default ViewItems;