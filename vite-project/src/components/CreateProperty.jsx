// CreateProperty.jsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import Contact from './Contacts';
import TestimonialsData from './TestimonialData';
import page from '../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg';
import { useNavigate } from 'react-router-dom';

function CreateProperty() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const [bedrooms, setBedrooms] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      price,
      image,
      description,
      category,
      location,
      bedrooms
    };

    try {
        const response = await fetch('http://localhost:3000/property', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create property');
        }
  
        console.log('Property created successfully');
        navigate('/');
      } catch (error) {
        console.error('Error creating property:', error.message);
      }
  };

  return (
    <div>
        <NavBar />
        <img src={page} className='home-img'/>
        <div className='cardBar'>
            <h2>Create Property</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                Image URL:
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                Category:
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <br />
                <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br />
                <label>
                Bedrooms:
                <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
      <TestimonialsData />
      <Contact />
    </div>
  );
}

export default CreateProperty;
