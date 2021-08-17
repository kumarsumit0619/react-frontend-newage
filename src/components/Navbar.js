import React from 'react'
import './Navbar.css'
//import Logo from './superman.png';

const Navbar = () => {
  

  function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }
}
  return (
    <div>
    
    <div id="rc_logo">
      <a href="#home" title="Logo">Awesome Website</a>
    </div>  
    
    <div className="rc_nav" id="centered_nav">
      <a href="#home" title="Home">Home</a>
      <a href="#services" title="Services">Services</a>
      <a href="#about" title="About">About</a>
      <a href="#contact" title="Contact">Contact</a>
      <a href="#" title="Menu" className="icon" onClick={myFunction}>&#9776;</a>
    </div>

    </div>
  )
}

export default Navbar;
