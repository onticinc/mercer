import React, { Component } from 'react';
import '../Components.css'
class Sidebar extends Component {

    render() {
        return (
            <div className='menu-background'>
                <aside className="menu-padding is-hidden-mobile">
                    <section className="sidebarLogo">
                        <figure className="avatar">
                        <img src="./plangig_logo.svg" style={{width: '150px', height: '150px',}} alt="Plangig Logo" />
                        </figure>
                    </section>
                    <p className="menu-name">
                        {/* Put Company Name Here */}
                    </p>
                </aside>
            </div>
        );
    }
}

export default Sidebar;