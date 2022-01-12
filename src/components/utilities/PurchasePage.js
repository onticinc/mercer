import React from 'react';
import '../Components.css'
// const { REACT_APP_SERVER_URL } = process.env;

const DisplayPurchasePage = () => {
   
    
      return (
        <div>
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                  <div className="box">
                    <form>
                      <div className="content">
                        <table className="table-profile">
                          <tr>
                            <h1>Congratulations!</h1>
                          </tr>
                          <tr>
                            <td>Your item purchase was successful. We'll email you a receipt and confirmation number in the next few minutes.</td>
                          </tr>
                          <tr>
                            <td>Thank you for shopping on Mercer</td>
                          </tr>
                          <tr>
                            <td>: - D</td>
                          </tr>
                        </table>
                      </div>
                      <a id="editProfile" className="button is-block is-fullwidth is-primary is-medium" href="/viewsales">Browse All Sales<i className="fa fa-sign-in" aria-hidden="true"></i></a>
                      <a id="viewSales" className="button is-block is-fullwidth is-info is-medium m-t-15" href="/newsale">Create A New Sale<i className="fa fa-sign-in" aria-hidden="true"></i></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
  
  
  export default DisplayPurchasePage;