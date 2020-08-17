import React from 'react';
import './Navbar.css';
import logo from '../../images/logo192.png'


export class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navlogo center" src={logo} alt="Leos" />
                <br />
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Live Music</li>
                    <li>Contact</li>
                </ul>
                </div>
        )
    }
}