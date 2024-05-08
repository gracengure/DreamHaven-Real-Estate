// HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
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
    <section className='home'>
      <SearchBar properties={properties} setFilteredProperties={handleSearch} />
      <img src={page} className='home-img'/>
      <PropertyListing properties={filteredProperties} />
    </section>
  );
}

export default HomePage;