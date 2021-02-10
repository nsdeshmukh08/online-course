import React from 'react';

import logo from '../../Assets/logo.svg';
import './LeftSideNav.css';

const LeftSideNav = () => {
    return ( 
    <div className='leftside_nav'>
        <div className='logo_container'><img src={logo} className="branding_logo"/></div>
        <div className='navigation_container'></div>
    </div> );
}
 
export default LeftSideNav;