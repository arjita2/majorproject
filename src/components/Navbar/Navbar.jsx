import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return(
    
    <div className='bg-red-500'>
    <h1 className= 'text-white'> App </h1>
    <a href="#about" className="hover:text-yellow-400 transition duration-300">About Us</a>

    </div>
  )
}

export default Navbar
