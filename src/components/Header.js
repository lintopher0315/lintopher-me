import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <Link to="/about" id="header-link" >About</Link> | <Link to="/" id="header-link">Projects</Link>
            <div id="title">
                Christopher Lin
            </div>
        </div>
    )
}

export default Header;