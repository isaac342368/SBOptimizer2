import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import "./Home.css";
import logoSrc from './assets/newSBLogo.png';

function Header() {



  return (


    <div>
      
          
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom">
      <Link to="/">
        <img src={logoSrc} alt="Home" className="logo-image" />
      </Link>  
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/spread">Spread</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/moneyline">Money Line</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/playerprops">Player Props</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
          
    </div>


  );
}



export default Header;
