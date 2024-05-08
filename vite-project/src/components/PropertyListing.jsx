import React from "react";

function PropertyListing({ properties }) {
  if (!properties || properties.length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="container">
        {properties.map((property) => (
          <div key={property.id}className="card" >
            <h2 className="property-name">{property.name}</h2>
            <div className="property-details">
              <img
                src={property.image}
                alt={property.name}
                className="property-img"
              />
              <p>{property.description} </p>
              <p>
{property.bedrooms !== undefined ? "Bedroom" : "Floors"}:{" "}
{property.bedrooms !== undefined
  ? property.bedrooms
  : property.floor}
</p>
              <p>Price: ${property.price} </p>
              <p> Location: {property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListing;
