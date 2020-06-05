import React from 'react';

import {
  Link
} from "react-router-dom";

import './stylesheets/Header.css';

const Header = () => {
    return (
      <header className= 'header-container'>
        <div class='logo'>
          TRANG NGO
        </div>
        <nav>
          <ul>
            <li> <Link to="/">+ home</Link></li>
            <li> <Link to="/aboutme">+ about me</Link></li>
            <li> <Link to="/artworks">+ artworks</Link></li>
            <li> <Link to="/contact">+ contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
export default Header;
