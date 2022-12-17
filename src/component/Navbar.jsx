import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">Why Beauty Salon</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
