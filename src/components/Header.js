import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="Header-container">
      <ul>
        <li><a href="#home"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png" alt="superman-Logo"/></a></li>
        <li><a href="#home">Awesome Website</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact-us">Contact us</a></li>
        

      </ul>
    </div>
  )
}
export default Header;