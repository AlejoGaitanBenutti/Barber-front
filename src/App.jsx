import { useState } from 'react'

import './App.css'
import Hero from './pages/Hero/Hero'
import Navbar from './components/NavBar'
import InfoPanel from './components/InfoPanel'
import Experience from './components/Experience'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import TheTeam from './components/TheTeam'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <InfoPanel/>
    <Experience/>
    <WhyChooseUs/>
    <Services/>
    <TheTeam/>
    <Footer/>
    </>
  )
}

export default App
