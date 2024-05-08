import React, { useEffect, useState } from "react";
function PropertyListing() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);
  
  return (
    <div>
      <div className="container">
        {properties.map((property) => (
          <div key={property.id} className="card">
            <h2>{property.name}</h2>
            <div className="property-details">
              <img
                src={property.image}
                alt={property.name}
                className="property-img"
              />
              <p>{property.description} </p>
              <p> Bedrooms: {property.bedrooms}</p>
              <p>Price: ${property.price} </p>
              <p> Location: {property.location}</p>
            </div>

            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default PropertyListing;