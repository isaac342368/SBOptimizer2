import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import "./Home.css";
import logoSrc from './assets/newSBLogo.png'; // Import your logo image

function Header() {


  return (
    <header>
      {/* Link to home when the logo is clicked */}
      <Link to="/">
        <img src={logoSrc} alt="Home" className="logo-home" />
      </Link>
      
      {/* Other header content */}
    </header>
  );
}




export default Header;
