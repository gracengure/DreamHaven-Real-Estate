import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PropertySpecs() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/property/${propertyId}`)
      .then((response) => response.json())
      .then((data) => setProperty(data))
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  }, [propertyId]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-specs">
      <h2 className="property-name">{property.name}</h2>
      <img
        src={property.image}
        alt={property.name}
        className="property-image"
      />
      <div className="property-details">
        <p>
          {property.bedrooms !== undefined ? "Bedroom" : "Floor"}:{" "}
          {property.bedrooms !== undefined ? property.bedrooms : property.floor}
        </p>
        <p className="property-price">Price: ${property.price}</p>
        <p className="property-location">Location: {property.location}</p>
        <p className="property-description">{property.description}</p>
      </div>
    </div>
  );
}

export default PropertySpecs;
