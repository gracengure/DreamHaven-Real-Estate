import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect from react library
import { useParams } from "react-router-dom"; // Importing useParams hook from react-router-dom
// Function component PropertySpecs
function PropertySpecs() {
  const { propertyId } = useParams(); // Extracting propertyId from URL params
  const [property, setProperty] = useState(null); // State variable to store property details
  // Fetch property details when propertyId changes
  useEffect(() => {
    fetch(`http://localhost:3000/property/${propertyId}`) // Fetching property data from server
      .then((response) => response.json()) // Parsing response as JSON
      .then((data) => setProperty(data)) // Setting property state with fetched data
      .catch(
        (error) => console.error("Error fetching property details:", error) // Handling fetch errors
      );
  }, [propertyId]); // Dependency array with propertyId, so useEffect runs when propertyId changes
  // If property is not available, display "Loading..."
  if (!property) {
    return <div>Loading...</div>;
  }
  // Function to go back to the previous page
  const goBack = () => {
    window.history.back(); // Go back using browser history
  };
  // Rendering JSX for PropertySpecs
  return (
    <div className="property-card">
      <div className="property-specs">
        <h2 className="property-name">{property.name}</h2>
        <img
          src={property.image}
          alt={property.name}
          className="property-image"
        />
        <div className="property-details">
          <p className="property-description">{property.description}</p>
          <p>
            {property.bedrooms !== undefined ? "Bedroom" : "Floor"}:{" "}
            {property.bedrooms !== undefined
              ? property.bedrooms
              : property.floor}
          </p>
          <p className="property-price">Price: ${property.price}</p>
          <p className="property-location">Location: {property.location}</p>
          <button className="go-back-btn" onClick={goBack}>
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySpecs; // Exporting the PropertySpecs component
