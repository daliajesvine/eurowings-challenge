import React from 'react'
import logo from '../assets/favicon.ico'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="logo" />
                <div className="navbar-expand nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/help">Help</Link>
                </div>
            </div>
        );
    }
}

export default Header;