import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Contact from './Contacts';
import TestimonialsData from './TestimonialsData';
import page from '../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg';

function PropertyPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching property with id:', id);
    fetch(`http://localhost:3000/property/${id}`)
     .then((response) => response.json())
     .then((data) => {
        console.log('Fetched property data:', data);
        setProperty(data);
      })
     .catch((error) => {
        console.error('Error fetching property data:', error);
        setError('Failed to fetch property data. Please try again later.');
      });
  }, [id]);

  if (!property) {
    return (
      <div>
        {error? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <img src={page} className='home-img'/>
      <div className="property-details">
        <h2 className="property-name">{property.name}</h2>
        {property.image? (
          <img src={property.image} alt={property.name} className="property-img" />
        ) : (
          <div>No image available</div>
        )}
        {property.description? (
          <p>{property.description}</p>
        ) : (
          <div>No description available</div>
        )}
        {property.bedrooms!== undefined? (
          <p>Bedrooms: {property.bedrooms}</p>
        ) : property.floor? (
          <p>Floor: {property.floor}</p>
        ) : (
          <div>No bedrooms or floor information available</div>
        )}
        {property.price? (
          <p>Price: ${property.price}</p>
        ) : (
          <div>No price information available</div>
        )}
        {property.location? (
          <p>Location: {property.location}</p>
        ) : (
          <div>No location information available</div>
        )}
      </div>
      <Contact />
      <TestimonialsData />
    </div>
  );
}

export default PropertyPage;