import React from 'react'
import CarForm from '../components/cars/CarForm';
import CarDisplay from '../components/cars/CarDisplay';
import {Route,Routes, useLocation} from 'react-router-dom'

import {AnimatePresence} from 'framer-motion'
function Pages() {
  const location = useLocation();
  return (

    <AnimatePresence>
    <Routes  location={location} key={location.key}>
 
    <Route path="/cardisplay/" element={<CarDisplay/>}/>
    <Route path="/carform/" element={<CarForm/>}/>
  </Routes>
  </AnimatePresence>
  )
}

export default Pages