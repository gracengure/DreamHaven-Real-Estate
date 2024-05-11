/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateProperty() {
  const [showForm, setShowForm] = useState(false);
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing properties from the backend and update the properties state
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error.message);
      }
    };
    fetchData();
  }, []);

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
      // Update local properties state to include the newly added property
      setProperties([...properties, formData]); // Update properties state with new property data
      navigate('/');

      // Reset form fields after submission
      setName('');
      setPrice('');
      setImage('');
      setDescription('');
      setCategory('');
      setLocation('');
      setBedrooms('');
    } catch (error) {
      console.error('Error creating property:', error.message);
    }
  };

  return (
    <div>
     
        <button onClick={() => setShowForm(!showForm)} style={{ textAlign: 'center', height: '34px', marginLeft:'1270px', color: 'white', backgroundColor: '#01b0f8', borderRadius: '5px', border: 'transparent' }}>
          {showForm ? 'Hide Form' : 'Add Property'}
        </button>
      
      {showForm && (
        <div>
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
        </div>
      )}

      {/* Display the added properties */}
      <div className='container'>
        {properties.map((property, index) => (
          <div key={index} className="card">
            <h2 className="property-name">{property.name}</h2>
            <img
              src={property.image}
              alt={property.name}
              className="property-img"
            />
            <div className="property-details">
              <p>Description: {property.description}</p>
              <p>
                {property.bedrooms !== undefined ? "Bedroom" : "Floor"}:{" "}
                {property.bedrooms !== undefined ? property.bedrooms : property.floor}
                <p>Price: ${property.price}</p>
                <p>Location: {property.location}</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateProperty