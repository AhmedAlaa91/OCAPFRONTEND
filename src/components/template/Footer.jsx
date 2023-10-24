import React from 'react'
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
import styled from 'styled-components' ;

function Footer() {
  return (
    <Foot>
    <footer className="footer bg-dark navbar-dark sticky-bottom">
    
    <div className="container-xxl footer-terms">
      <ul className="navbar-nav gap-md-3">
        <li className="fw-bold">© Orange 2023</li>
        <li><a className="nav-link" href="#">Terms and conditions</a></li>
        <li><a className="nav-link" href="#">Privacy</a></li>
        <li><a className="nav-link" href="#">Accessibility statement</a></li>
        <li><a className="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
  </Foot>
  )
}

const Foot = styled.div`
position: relative;
bottom: 0;
width: 100%;
`

export default Footer