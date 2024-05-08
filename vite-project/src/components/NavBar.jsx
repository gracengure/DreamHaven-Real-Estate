

// NavBar.js
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Logo from '../assets/IMG_20240507_135149.jpg';

function NavBar({ onPropertyTypeSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePropertyTypeClick = (type) => {
    onPropertyTypeSelect(type);
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="nav-bar">
      <img src={Logo} alt="logo" className="logo-img" />
      <ul className="nav-ul">
        <li>Home</li>
        <li className="dropdown">
          Property{' '}
          <FaCaretDown
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={isDropdownOpen ? 'active' : ''}
          />
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li onClick={() => handlePropertyTypeClick('Apartments')}>
                <a href="#">Apartments</a>
              </li>
              <li onClick={() => handlePropertyTypeClick('Villas')}>
                <a href="#">Villas</a>
              </li>
              <li onClick={() => handlePropertyTypeClick('Condos')}>
                <a href="#">Condos</a>
              </li>
              <li onClick={() => handlePropertyTypeClick('Commercials')}>
                <a href="#">Commercials</a>
              </li>
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