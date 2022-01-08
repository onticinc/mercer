import '../Components.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SaleCard from '../sale/SaleCard';

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, userName, email, profilePic, address, phone, password, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  const userData = user ?
    (<div>
      <section className="hero  is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <figure className="avatar">
                  <img src="https://djontic.com/wp-content/uploads/2022/01/profile_pic.jpg" style={{ width: '150px', height: '150px' }} alt="Mercer Logo" />
                </figure>
                <form>
                  <p className="subtitle has-text-black">Profile Page</p>
                  <div class="content">
                    <table class="table-profile">
                      <tr>
                        <th colspan="1"></th>
                        <th colspan="2"></th>
                      </tr>
                      <tr>
                        <td>Name: {userName}</td>
                      </tr>
                      <tr>
                        <td>Email: {email}</td>
                      </tr>
                      <tr>
                        <td>Phone Number: {phone}</td>
                      </tr>
                      <tr>
                        <td>Address: {address}</td>
                      </tr>
                      <tr>
                        <td>Account ID: {id}</td>
                      </tr>
                    </table>
                  </div>
                  <button id="Edit Profile" className="button is-block is-fullwidth is-primary is-medium">Edit Profile<i className="fa fa-sign-in" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SaleCard />
      </section>

    </div>) : <h2>Loading...</h2>

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };

  return (
    <div className="text-center pt-4">
      {user ? userData : errorDiv()}
    </div>
  );

}

export default Profile;