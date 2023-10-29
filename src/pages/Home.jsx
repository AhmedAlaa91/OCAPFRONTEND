import React from 'react'
import Navbar from '../components/template/Navbar'
import Footer from '../components/template/Footer';
import CarbonCard from '../components/template/CarbonCard';
import Pages from './Pages';
import { BrowserRouter, useLocation } from "react-router-dom";
import { motion,    AnimatePresence } from "framer-motion"
function Home() {

  const containerVariants={
    hidden:{
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5}
    },
    transition :{type: 'spring' , stiffness: 120},
    exitt:{
      x:'-100%',
      transition: { ease: 'easeInOut'}
    }
  }

  return (

    <BrowserRouter>
        <header className='sticky-top'><Navbar/><CarbonCard/></header> 
   
        <motion.body style={{minHeight: '30vw'}} initial={{ x: '100vw'}}  animate={{ x:'0'}} transition={{ type:'spring' , delay:'0.5' , stiffness:'50'}}><Pages/></motion.body>
       
       <footer styles={{margin: 0,}}><Footer/> </footer>
      
       </BrowserRouter>
     
  )
}



export default Home;