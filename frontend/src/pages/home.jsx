import React from 'react'
import '../styles/home.css'
import Navbar from './navbar.jsx'
import CarouselComponent from './courousel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Home = () => {
  return (
    <>
    <div className="animated-background">
       <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Navbar/>
      <h1 className='top'>
        Welcome to My React App
      </h1>
      
      
    </div>
   
    </>
  )
}

export default Home
