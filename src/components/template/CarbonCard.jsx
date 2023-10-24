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

import co2 from'../../static/images/co2.png' 

import styled from 'styled-components';


function CarbonCard() {
  return (
    <StickyCard>

<div >
<img src={co2} alt="Back to homepage" title="Back to homepage" width="30" height="30" style={{marginTop: 0,marginLeft: 20}}/>   
<span className="text-black text-bold" styles="margin-left: -10px;padding-left: 4px;">27<span className="text-white text-bold" styles="text-transform: none;">Kg<span styles="color:white; font-size:10px"> CO2 Saved</span></span> </span>
                      
 </div>
</StickyCard>
  )
}

const StickyCard= styled.div`

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 7rem;
  background-color: Orange;
 
  
  width: 190px;
  height: 30px;
`
export default CarbonCard