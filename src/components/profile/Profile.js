import '../Components.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ViewSale from '../sale/SalePage';

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
      <section className="topRow">
        <div className="container">
          <div className="row">
            <figure className="avatar2">
              <img src="https://i.imgur.com/gi4BvGD.png" style={{ width: '150px', height: '150px' }} alt="Mercer Logo" />
              {/* <img src={profilePic} style={{ width: '150px', height: '150px' }} alt="Mercer Logo" /> */}
            </figure>
          </div>
        </div>
      </section>

      <section className="hero is-success is-fullheight">
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
                  <button id="Edit Profile" className="button is-block is-info is-large is-fullwidth">Edit Profile<i className="fa fa-sign-in" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ViewSale />
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