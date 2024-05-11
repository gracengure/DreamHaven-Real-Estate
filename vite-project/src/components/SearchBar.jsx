import React, { useState } from "react"; // Importing React and useState from react library
// Function component SearchBar
function SearchBar({ properties, setFilteredProperties }) {
  // State variable to store city criteria
  const [cityCriteria, setCityCriteria] = useState("");
  // Function to handle city input change
  const handleCityChange = (e) => {
    setCityCriteria(e.target.value); // Updating city criteria based on input value
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    // Filtering properties based on city criteria
    const filteredProperties = properties.filter((property) => {
      const cityMatch =
        property.location.toLowerCase().includes(cityCriteria.toLowerCase()) ||
        cityCriteria === ""; // Checking if city matches the criteria or if criteria
      return cityMatch; // Returning whether the city matches the criteria
    });
    console.log(filteredProperties); // Logging filtered properties to console
    setFilteredProperties(filteredProperties); // Updating filtered properties state
  };
  // Rendering JSX for SearchBar
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="city-input"
          type="text"
          placeholder="Search by city e.g. New York"
          value={cityCriteria}
          onChange={handleCityChange}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar; // Exporting the SearchBar component
