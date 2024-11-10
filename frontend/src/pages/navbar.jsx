import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div className='nav-main'>
        <div className='heading'>
             <h1>Blogs</h1>
       </div>
       <div className='link'>
            <Link to="/" className='links'>Home</Link>
          <Link to="/blog" className='links'>Blogs</Link>
          <Link to="/add" className='links'>ADD</Link>
       </div>
      
      
        
    </div>
  )
}

export default Navbar
