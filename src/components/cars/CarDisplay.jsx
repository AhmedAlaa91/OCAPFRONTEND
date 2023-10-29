import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import {Splide,SplideSlide} from '@splidejs/react-splide'

import '../../../node_modules/@splidejs/react-splide/dist/css/splide-core.min.css'
import '../../../node_modules/@splidejs/react-splide/dist/css/splide.min.css'
import '../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-default.min.css'

import { Context } from 'react'
import { Link , BrowserRouter } from 'react-router-dom';
import Egypt_plate from'../../static/images/Egypt_plate.png' 
import add_car from'../../static/images/add_car.png' 
import { motion,    AnimatePresence } from "framer-motion"



function CarDisplay() {
   
    
  return (

<div>
      <Wrapper>
      <p class="ll-sm h3 mb-4" >
          Your Registered Cars .
        </p>
    <Splide aria-label="My Favorite Images"  style={{marginRight: '-7vw'}} options={{perPage:1,direction   : 'ttb', pagination:false,  wheel       : true,
  releaseWheel: true,
                drag:"free",
                gap:"1rem",
                height : "10vw"
 }}data-testid="Splide-test" >
    <SplideSlide>
        <Card>
      <p>Honda -    BLUE</p>
      <img src={Egypt_plate} alt=""/>
      <PlateNumber>1 8 6</PlateNumber>
      <PlateLetter>س ع ج</PlateLetter>
      <ButtonEdit> <button type="button" class="btn btn-primary"data-dismiss="modal">Edit </button></ButtonEdit>
      <ButtonDelete><button type="button" class="btn btn-secondary"data-dismiss="modal">Delete</button></ButtonDelete>
      </Card>
    </SplideSlide>
    <SplideSlide>
    <Card>
      <p>BMW -   Red</p>
      <img src={Egypt_plate} alt=""/>
      <PlateNumber>1 9 9</PlateNumber>
      <PlateLetter>ا ب</PlateLetter>
      <ButtonEdit> <button type="button" class="btn btn-primary"data-dismiss="modal">Edit </button></ButtonEdit>
      <ButtonDelete><button type="button" class="btn btn-secondary"data-dismiss="modal">Delete</button></ButtonDelete>
      </Card>
    </SplideSlide>
    <SplideSlide>
        <Card>
      <p>Nissan -    Silver</p>
      <img src={Egypt_plate} alt=""/>
      <PlateNumber>1 8 1</PlateNumber>
      <PlateLetter>ا ج</PlateLetter>
      <ButtonEdit> <button type="button" class="btn btn-primary"data-dismiss="modal">Edit </button></ButtonEdit>
      <ButtonDelete><button type="button" class="btn btn-secondary"data-dismiss="modal">Delete</button></ButtonDelete>
      </Card>
    </SplideSlide>
  </Splide>
  </Wrapper>
  <AddCarWrapper>
  <Link to={'/carform/'}>
  <img src={add_car} alt="button-test" data-testid="button-test"/>
  </Link>
  </AddCarWrapper>

  </div>
  )
}

const Wrapper = styled.div `
margin: auto;
margin-bottom: 0;
margin-left :12vw;
margin-top: 5%;
`;
const AddCarWrapper = styled.div `
margin-left :12vw;
img {
   
  position: absolute;
  left: 60%;
  margin-left :10vw;
  margin-top :-10vw;
  width: 150px;
  height: 150px;


}
`;

const Card = styled.div`

height: 10vw;
width: 600px;

border: 2px solid orange;
border-radius: 1rem;
overflow: hidden;

position: relative;
img {
   
    position: absolute;
    left: 60%;
    top :10%;
    width: 210px;
    height: 110px;
    object-fit: cover;

}


p {
    position: absolute;
  
    left: 10%;
    top: 15%;
    
    color: black;
    width: 100%;

    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;



}


`;
const ButtonEdit = styled.div`
position: absolute;
  
left: 10%;
bottom: 15%;

`

const ButtonDelete = styled.div`
position: absolute;
  
left: 30%;
bottom: 15%;

`

const PlateNumber= styled.div`

    position: absolute;
      top: 50%;
      left: 65%;
      color: black;
  
      font-weight: 600;
      font-size: 25px;
     
    
`
const PlateLetter= styled.div`

    position: absolute;
      top: 50%;
      left: 80%;
      color: black;
  
      font-weight: 600;
      font-size: 25px;
     
      `
     
     global.matchMedia =
      global.matchMedia ||
      function (query) {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
      };


export default CarDisplay