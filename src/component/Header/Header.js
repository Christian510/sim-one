
import React from 'react';
import './Header.sass';
import Icon from '../../assets/views/shelfie_icon.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <div>
        <header>
            <div id="logo" className="flex-left-row" >
                <div>
                    <img src={Icon} alt="Shelfie Icon" />
                </div>
                <div>
                    <span>SHELFIE</span>
                </div>
            </div>
            <ul id="links">
                <li className="header-links">
                    <Link className="link" to="/" >Dashboard</Link>
                </li>
                <li className="header-links">
                    <Link className="link" to="/form" >Add Inventory</Link>
                </li>
            </ul>
        </header>
    </div>
    )
}