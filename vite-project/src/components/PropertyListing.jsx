
function PropertyListing({ properties }) {
  if (!properties || properties.length === 0) {
    return <div>Loading ...</div>;
  }
  
  return (
    <div>
     <div id="apartment" className="container">
  {properties.map((property) => {
    if (property.category === 'Apartments') {
      return (
        <div key={property.id} className="card">
          <h2 className="property-name">{property.name}</h2>
          <div className="property-details">
            <img
              src={property.image}
              alt={property.name}
              className="property-img"
            />
            <p>{property.description}</p>
            <p>
              {property.bedrooms !== undefined ? 'Bedroom' : 'Floor'}:{' '}
              {property.bedrooms !== undefined
                ? property.bedrooms
                : property.floor}
            </p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
          </div>
        </div>
      );
    } else {
      return null; // Render nothing if the category is not 'Apartments'
    }
  })}
</div>
<div id="villa" className="container">
  {properties.map((property) => {
    if (property.category === 'Villas') {
      return (
        <div key={property.id} className="card">
          <h2 className="property-name">{property.name}</h2>
          <div className="property-details">
            <img
              src={property.image}
              alt={property.name}
              className="property-img"
            />
            <p>{property.description}</p>
            <p>
              {property.bedrooms !== undefined ? 'Bedroom' : 'Floor'}:{' '}
              {property.bedrooms !== undefined
                ? property.bedrooms
                : property.floor}
            </p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
          </div>
        </div>
      );
    } else {
      return null; // Render nothing if the category is not 'Apartments'
    }
  })}
</div>
<div id="condo" className="container">
  {properties.map((property) => {
    if (property.category === 'Condos') {
      return (
        <div key={property.id} className="card">
          <h2 className="property-name">{property.name}</h2>
          <div className="property-details">
            <img
              src={property.image}
              alt={property.name}
              className="property-img"
            />
            <p>{property.description}</p>
            <p>
              {property.bedrooms !== undefined ? 'Bedroom' : 'Floor'}:{' '}
              {property.bedrooms !== undefined
                ? property.bedrooms
                : property.floor}
            </p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
          </div>
        </div>
      );
    } else {
      return null; // Render nothing if the category is not 'Apartments'
    }
  })}
</div>
    </div>
  );
}

export default PropertyListing;
