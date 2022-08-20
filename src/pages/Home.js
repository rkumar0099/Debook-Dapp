import React, {useState} from 'react'


import Footer from '../components/Footer/index.js'
import GlobalStyles from '../components/GlobalStyles.js'
import HeroSection from '../components/Hero.js'
// import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data.js'
// import InfoSection from '../components/InfoSection/index.js'
import Navbar from '../components/Navbar'
import Newsec from '../components/Newsec/newsee.js'
// import Services from '../components/Services/index.js'
import Sidebar from '../components/Sidebar'

const Home = () => {

   const [isOpen, setIsOpen]= useState(false)

   const toggle = () => {

    setIsOpen(!isOpen)
   }
    
  return (
    <>
    <GlobalStyles/>
    <Sidebar isOpen = {isOpen} toggle = {toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />

    <Newsec/>

    <Footer/>
    
    
    </>
  )
}

export default Home;
