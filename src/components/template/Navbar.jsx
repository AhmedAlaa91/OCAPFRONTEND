import React from 'react';
import { Link } from 'react-router-dom';
import  '../../static/css/boosted.css';
import  '../../static/css/all.css';
import  '../../static/css/animate.css';
import  '../../static/css/aos.css';
import  '../../static/css/boosted.min.css';
import  '../../static/css/boosted.min.css.map';
import  '../../static/css/core3.css';
import  '../../static/css/flaticon.css';
import  '../../static/css/icomoon.css';
import  '../../static/css/ionicons.min.css';
import  '../../static/css/magnific-popup.css';
import  '../../static/css/main.css';
import  '../../static/css/open-iconic-bootstrap.min.css';
import  '../../static/css/orangeHelvetica.min.css';
import  '../../static/css/orangeIcons.min.css';

import  '../../static/css/owl.theme.default.min.css';

import orange_logo from'../../static/images/orange_logo.svg' 
import male from'../../static/images/male.jfif' 
import styled from 'styled-components';

function Navbar() {
  return (
    <header className="sticky-top">
<nav className="navbar navbar-dark bg-dark navbar-expand-lg" aria-label="Global navigation - No title example">
  <div className="container-xxl">
    <div className="navbar-brand me-auto me-lg-4">
      <a className="stretched-link" href="#">
        <img src={orange_logo} width="50" height="50" alt="Boosted - Back to Home" loading="lazy"/>
       
      </a>
      Car<span className="text-primary">POOL</span>
    </div>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header-1" aria-controls="global-header-1.1 global-header-1.2" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
    
    <div id="global-header-1.1" className="navbar-collapse collapse me-lg-auto global-header-1">
      <ul className="navbar-nav"  style={{marginLeft: 'auto'}}>
        <li className="nav-item"><a className="nav-link active" href="#" aria-current="page">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Join Ride</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Create Ride</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Rides</a></li>
        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
      </ul>
    </div>
    <div id="global-header-1.2" className="navbar-collapse collapse d-sm-flex global-header-1">
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <a href="#" className="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" className="overflow-visible">
            
            </svg>
            <span className="visually-hidden">Search</span>
          </a>
        </li>

        <li className="nav-item">
        <button type="button"
                            className="nav-link btn btn-link btn-inverse dropdown-toggle d-flex align-items-center mr-0"
                            data-toggle="dropdown">
                            <span className="svg-avatar mr-1" aria-hidden="true"></span>
                            <span>Hello
                               
                                    <span className="text-primary capitalize" styles="background-color: transparent;">Ahmed</span>
                                
                            </span>
                        </button>


          
        </li>

        
      </ul>
    </div>
  </div>
</nav>

  </header>


   
);
};


  
export default Navbar