import Logo from "../assets/IMG_20240507_135149.jpg"; // Importing the logo image from assets folder

import { FaCaretDown } from "react-icons/fa"; // Importing the FaCaretDown icon from react-icons library
import React, { useState } from "react"; // Importing React and useState hook from React library

// Function component NavBar
function NavBar() {
  // Using the useState hook to create a state variable isDropdownOpen, initialized with false
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen); // Inverting the value of isDropdownOpen
  }
  // Rendering the JSX for NavBar
  return (
    <div className="nav-bar">
      <img src={Logo} alt="logo" className="logo-img" />

      <ul className="nav-ul">
        <li>
          <a href="#home"> Home</a>
        </li>
        <li className="dropdown">
          Property
          <FaCaretDown onClick={toggleDropdown} />
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li>
                <a href="#Apartments">Apartments</a>
              </li>
              <li>
                <a href="#Villas">Villas</a>
              </li>
              <li>
                <a href="#Condos">Condos</a>
              </li>
              <li>
                <a href="#Commercials">Commercials</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials </a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contacts </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar; // Exporting the NavBar component
