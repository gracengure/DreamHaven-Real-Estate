/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SearchBar({ properties, setFilteredProperties }) {
  const [cityCriteria, setCityCriteria] = useState("");

  const handleCityChange = (e) => {
    setCityCriteria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProperties = properties.filter((property) => {
      const cityMatch =
        property.location.toLowerCase().includes(cityCriteria.toLowerCase()) ||
        cityCriteria === "";
      return cityMatch;
    });
    console.log(filteredProperties);
    setFilteredProperties(filteredProperties);
  };

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