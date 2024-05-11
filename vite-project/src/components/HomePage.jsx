import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import SearchBar from "./SearchBar"; // Import SearchBar component
import PropertyListing from "./PropertyListing"; // Import PropertyListing component
import page from "../assets/WhatsApp Image 2024-05-07 at 16.55.47.jpeg"; // Import image file
import CreateProperty from "./CreateProperty"; // Import CreateProperty component

function HomePage() {
  // Define HomePage functional component
  const [properties, setProperties] = useState([]); // State hook to manage properties data
  const [filteredProperties, setFilteredProperties] = useState([]); // State hook to manage filtered properties data

  useEffect(() => {
    // useEffect hook to fetch properties data when component mounts
    fetch("http://localhost:3000/property") // Fetch properties data from backend
      .then((response) => response.json()) // Parse response data to JSON
      .then((data) => {
        // Handle fetched data
        setProperties(data); // Update properties state with fetched data
        setFilteredProperties(data); // Update filteredProperties state with fetched data
      });
  }, []); // Dependency array ensures useEffect only runs once on component mount

  const handleSearch = (filteredProperties) => {
    // Function to handle search filtering
    setFilteredProperties(filteredProperties); // Update filteredProperties state with filtered data
  };

  const handleDeleteProperty = (id) => {
    // Function to handle property deletion
    fetch(`http://localhost:3000/property/${id}`, {
      // Send DELETE request to delete property
      method: "DELETE", // Specify request method
    })
      .then(() => {
        // Handle successful deletion
        const updatedProperties = properties.filter(
          (property) => property.id !== id
        ); // Filter out deleted property
        setProperties(updatedProperties); // Update properties state after deletion
        setFilteredProperties(updatedProperties); // Update filteredProperties state after deletion
      })
      .catch((error) => console.error("Error deleting property:", error)); // Log error if deletion fails
  };

  return (
    <section id="home" className="home">
      <SearchBar properties={properties} setFilteredProperties={handleSearch} />
      <img src={page} className="home-img" />
      <CreateProperty />
      <PropertyListing
        properties={filteredProperties}
        onDelete={handleDeleteProperty}
      />
    </section>
  );
}

export default HomePage; // Export HomePage component
