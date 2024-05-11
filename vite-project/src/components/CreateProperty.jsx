import React, { useState, useEffect } from "react"; // Importing necessary modules from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom

function CreateProperty() {
  // CreateProperty functional component
  const [showForm, setShowForm] = useState(false); // State hook to manage visibility of the form

  // State hooks to manage form input values
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [properties, setProperties] = useState([]); // State hook to manage property data
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  useEffect(() => {
    // useEffect hook to fetch existing properties when component mounts
    const fetchData = async () => {
      // Fetch function to get data from the backend
      try {
        const response = await fetch("http://localhost:3000/properties"); // Fetch properties from backend
        if (!response.ok) {
          // Check if response is ok
          throw new Error("Failed to fetch properties"); // Throw an error if fetching fails
        }
        const data = await response.json(); // Parse response data to JSON
        setProperties(data); // Update properties state with fetched data
      } catch (error) {
        // Catch any errors during fetching
        console.error("Error fetching properties:", error.message); // Log the error message
      }
    };
    fetchData(); // Call fetchData function
  }, []); // Dependency array ensures useEffect only runs once on component mount

  const handleSubmit = async (event) => {
    // Function to handle form submission
    event.preventDefault(); // Prevent default form submission behavior
    const formData = {
      // Create form data object
      name,
      price,
      image,
      description,
      category,
      location,
      bedrooms,
    };

    try {
      const response = await fetch("http://localhost:3000/property", {
        // Send POST request to create property
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (!response.ok) {
        // Check if response is ok
        throw new Error("Failed to create property"); // Throw an error if creating property fails
      }

      console.log("Property created successfully"); // Log success message
      setProperties([...properties, formData]); // Update properties state with new property data
      navigate("/"); // Navigate to home page after successful submission

      // Reset form fields after submission
      setName("");
      setPrice("");
      setImage("");
      setDescription("");
      setCategory("");
      setLocation("");
      setBedrooms("");
    } catch (error) {
      // Catch any errors during property creation
      console.error("Error creating property:", error.message); // Log the error message
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          textAlign: "center",
          height: "34px",
          color: "white",
          backgroundColor: "#01b0f8",
          borderRadius: "5px",
          border: "transparent",
        }}
      >
        {showForm ? "Hide Form" : "Add Property"}
      </button>

      {showForm && ( // Conditional rendering of form based on showForm state
        <div>
          <div className="cardBar">
            <h2>Create Property</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Price:
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <br />
              <label>
                Image URL:
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />{" "}
              </label>
              <br />
              <label>
                {" "}
                Description:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <br />
              <label>
                {" "}
                Category:
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />{" "}
              </label>
              <br />
              <label>
                Location:
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
              <br />
              <label>
                {" "}
                Bedrooms:
                <input
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />{" "}
              </label>
              <br />
              <button type="submit">Submit</button>{" "}
            </form>
          </div>
        </div>
      )}

      {/* Display the added properties */}
      <div className="container">
        {" "}
        {properties.map(
          (
            property,
            index // Map through properties array to render each property
          ) => (
            <div key={index} className="card">
              <h2 className="property-name">{property.name}</h2>
              <img // Property image
                src={property.image}
                alt={property.name}
                className="property-img"
              />
              <div className="property-details">
                <p>Description: {property.description}</p>
                <p>
                  {property.bedrooms !== undefined ? "Bedroom" : "Floor"}:{" "}
                  {property.bedrooms !== undefined
                    ? property.bedrooms
                    : property.floor}
                  <p>Price: ${property.price}</p>
                  <p>Location: {property.location}</p>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CreateProperty; // Export CreateProperty component
