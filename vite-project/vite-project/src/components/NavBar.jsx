

import Logo from "../assets/IMG_20240507_135149.jpg";
import { FaCaretDown } from 'react-icons/fa';
import React, { useState } from 'react'


function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 
  function toggleDropdown  () {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="nav-bar">
      <img src={Logo} alt="logo" className="logo-img" />

      <ul className="nav-ul">
      <li>
         <a href="#home"> Home</a>
        </li>
  <li className="dropdown">
    Property 
    <FaCaretDown   onClick={toggleDropdown} />
    {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><a  href="#Apartments">Apartments</a></li>
              <li><a  href="#Villas">Villas</a></li>
              <li><a  href="#Condos">Condos</a></li>
              <li><a  href="#Commercials">Commercials</a></li>
            </ul>
          )}
  </li>
  <li> <a href="#testimonials">Testimonials </a></li>
  <li> <a href="#contact">Contacts </a></li>
  
</ul>
      
      
    </div>
  );
}

export default NavBar;
