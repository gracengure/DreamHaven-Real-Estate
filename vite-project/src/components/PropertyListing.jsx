import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function PropertyListing({ properties }) {
  if (!properties || properties.length === 0) {
    return <div>Loading ...</div>;
  }

  const categories = ['Apartments', 'Villas', 'Condos', 'Commercials'];

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="container">
          <h1 id={category}>{category}</h1>
          {properties
            .filter((property) => property.category === category)
            .map((property) => (
              <div key={property.id} className="card">
                <Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'black'}}>
                  <h2 className="property-name">{property.name}</h2>
                  <div className="property-details">
                    <img src={property.image} alt={property.name} className="property-img" />
                    <p>{property.description}</p>
                    <p>{property.bedrooms !== undefined ? 'Bedroom' : 'Floor'}: {property.bedrooms !== undefined ? property.bedrooms : property.floor}</p>
                    <p>Price: ${property.price}</p>
                    <p>Location: {property.location}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default PropertyListing;
