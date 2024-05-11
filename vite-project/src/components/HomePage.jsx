/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import PropertyListing from './PropertyListing';
import page from '../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg';
import CreateProperty from './CreateProperty';

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

  const handleDeleteProperty = (id) => {
    // Make a DELETE request to the server
    fetch(`http://localhost:3000/property/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Update state after successful deletion
      const updatedProperties = properties.filter(property => property.id !== id);
      setProperties(updatedProperties);
      setFilteredProperties(updatedProperties);
    })
    .catch(error => console.error('Error deleting property:', error));
  };

  return (
    <section  id="home"className='home'>
      <SearchBar properties={properties} setFilteredProperties={handleSearch} />
      <img src={page} className='home-img'/>
      <CreateProperty/>
      <PropertyListing properties={filteredProperties} onDelete={handleDeleteProperty} />
    </section>
  );
}

export default HomePage;