import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import NavBar from './NavBar';
import Contact from './Contacts';
import TestimonialsData from './TestimonialsData';
import page from '../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg';

function PropertyPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    console.log("Fetching property with id:", id);
    fetch(`http://localhost:3000/property/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched property data:", data);
        setProperty(data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, [id]);  

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <img src={page} className='home-img'/>
      <div className="property-details">
        <h2 className="property-name">{property.name}</h2>
        <img src={property.image} alt={property.name} className="property-img" />
        <p>{property.description}</p>
        <p>{property.bedrooms !== undefined ? 'Bedroom' : 'Floor'}: {property.bedrooms !== undefined ? property.bedrooms : property.floor}</p>
        <p>Price: ${property.price}</p>
        <p>Location: {property.location}</p>
      </div>
      <Contact />
      <TestimonialsData />
    </div>
  );
}

export default PropertyPage;
