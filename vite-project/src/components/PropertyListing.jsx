import React from "react"; // Importing React library
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

// Function component PropertyListing
function PropertyListing({ properties, onDelete }) {
  // If properties are not available or empty, display "Loading ...
  if (!properties || properties.length === 0) {
    return <div>Loading ...</div>;
  }
  // Array of property categories
  const categories = ["Apartments", "Villas", "Condos", "Commercials"];
  // Function to handle property deletion
  const handleDelete = (id) => {
    onDelete(id);
  };
  // Rendering JSX for PropertyListing
  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="container">
          <h1 id={category}></h1>
          {properties
            .filter((property) => property.category === category)
            .map((property) => (
              <div key={property.id} className="card">
                <h2 className="property-name">{property.name}</h2>
                <Link to={`/properties/${property.id}`}>
                  <img
                    src={property.image}
                    alt={property.name}
                    className="property-img"
                  />
                </Link>
                <div className="property-details">
                  <p>Price: ${property.price}</p>
                  <p>Location: {property.location}</p>
                  <br />
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(property.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default PropertyListing; // Exporting the PropertyListing component
