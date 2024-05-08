

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
          Home
        </li>
  <li className="dropdown">
    Property 
    <FaCaretDown   onClick={toggleDropdown} />
    {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><a >Apartments</a></li>
              <li><a >Villas</a></li>
              <li><a >Condos</a></li>
              <li><a >Tower</a></li>
            </ul>
          )}
  </li>
  <li>Testimonials</li>
  <li>Contacts</li>
  
</ul>
      
      
    </div>
  );
}

export default NavBar;
