import React, { useState } from 'react';
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
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function CarForm() {

const [ccNumber, setCcNumber] = useState('');

  const formatAndSetCcNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, '');
    let inputNumbersOnly = inputVal;

    if (inputNumbersOnly.length > 7) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 7);
    }

    const splits = inputNumbersOnly.match(/.{1,1}/g);

    let spacedNumber = '';
    if (splits) {
      spacedNumber = splits.join(' ');
    }

    setCcNumber(spacedNumber);
  };



  return (
 
    <div class="container-xxl pt-4">
    <div class="row">
      <div class="col-sm-12 col-lg-5 offset-lg-3">
        <p class="ll-sm h3 mb-4">
          Do you own a car ? Please fill the form to register your car .
        </p>
        <form class="needs-validation mb-5" noValidate="">
          <div class="row">
            <div class="col-12">
              <p class="fw-bold mb-4">
                <span class="text-primary me-1">*</span>indicates required
              </p>
            </div>
            <div class="col-sm-4 col-md-6 mb-3">
              <label htmlFor="selectBrand" id="selectBrandLabel" class="form-label is-required">Car Brand<span class="visually-hidden"> (required)</span></label>
              <select class="form-select" id="selectBrand" required="" data-testid="select-option">
                <option selected="" disabled="" value="0" aria-hidden="true">Select a Brand</option>
                <option value="1">Honda</option>
                <option value="2">Nissan</option>
                <option value="3">Hundai</option>
                <option value="3">Mercedes</option>
                <option value="4">Audi</option>
              </select>
            </div>
            <div class="col-sm-4 col-md-6 mb-3">
              <label htmlFor="selectColor" id="selectColorLabel" class="form-label is-required">Color<span class="visually-hidden"> (required)</span></label>
              <select class="form-select" id="selectColor" required="" data-testid="select-option">
                <option selected="" disabled="" value="0" aria-hidden="true" >Select a Color</option>
                <option value="1">Red</option>
                <option value="2">Blue</option>
                <option value="3">White</option>
                <option value="3">Black</option>
                <option value="4">Yellow</option>
              </select>
            </div>

            
            <div class="col-12">
              <div class="mb-3">
              <label htmlFor="Seats" id="SeatsLabel" class="form-label is-required" data-testid="number-input">Number of seats <span class="visually-hidden"> (required)</span></label>
              <input type="number" id="Seats" defaultValue="3" min="1" max="3" class="numberinput form-control" required="" /> 
              </div>
            </div>
            <div class="col-sm-6">
                  <div class="form-group">
                      <div  class="form-check">
                        <input type="checkbox" name="Driver_license" class="checkboxinput" id="Driverlicense" data-testid="checkbox"/>
                            <label htmlFor="Driverlicense" class="form-check-label">
                                Is Driver license Valid ?
                            </label>
                        </div>
                    </div>
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                      <div  class="form-check">
                        <input type="checkbox" name="Car_license" class="checkboxinput" id="Carlicense" data-testid="checkbox"/>
                            <label htmlFor="Carlicense" class="form-check-label">
                                Is Car license Valid ?
                            </label>
                        </div>
                    </div>
              </div>
              <div class="col-sm-4 col-md-6 mb-3">
              <label htmlFor="plateNumbers" id="plateNumbersLabel" className="form-label is-required">Plate Numbers<span className="visually-hidden"> (required)</span></label>
              <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="tooltip1">Enter Car Plate Number from left to right </Tooltip>}
                        >
              <button type="button" className="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for text area">
                  
                </button>
                </OverlayTrigger>

    
              <input type="text" id="plateNumbers" placeholder="e.g. : 1 2 3 ا ب ج" className="numberinput form-control"  data-testid="number-input" value={ccNumber} onChange={formatAndSetCcNumber}/> 
            </div>
              <button type="submit" class="btn btn-primary mt-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}


const styledInput = styled.input`
right: 2rem;
`
export default CarForm