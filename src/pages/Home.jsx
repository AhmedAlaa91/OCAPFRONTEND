import React from 'react'
import Navbar from '../components/template/Navbar'
import Footer from '../components/template/Footer';
import CarForm from '../components/cars/CarForm';
import CarbonCard from '../components/template/CarbonCard';
function Home() {


  return (
    <div>
        <header className='sticky-top'><Navbar/><CarbonCard/></header> 
        
        <body><CarForm/></body>
       
       <footer className='sticky-bottom'><Footer/> </footer>

   </div>
 
  )
}

export default Home;