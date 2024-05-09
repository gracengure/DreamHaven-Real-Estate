// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Contact from './Contacts';
import TestimonialsData from './TestimonialData';
import PropertyListing from './PropertyListing';
import page from '../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg';

function HomePage() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data); 
      });
  }, []);

  const handleSearch = (filteredProperties) => {
    setFilteredProperties(filteredProperties);
  };

  return (
    <section id="home" className='home'>
      <NavBar />
      <SearchBar properties={properties} setFilteredProperties={handleSearch} />
      <img src={page} className='home-img'/>
      <Link to="/create_property">
        <button style={{ textAlign: 'center', height: '34px', marginLeft: '5px', color: 'white', backgroundColor: 'blue', borderRadius: '5px', border: 'transparent' }}>Add Property</button>
      </Link>
      <PropertyListing properties={filteredProperties} />
      <TestimonialsData />
      <Contact />
    </section>
  );
}

export default HomePage;
