import React from "react";

function SearchBar() {
  

  return (
    <form >
      <input
        className="city-input"
        type="text"
        placeholder="Search by city ie New York, Brookhaven, Islip, Oyster Bay, Yonkers, Babylon, Greece, Albany"
        value={cityCriteria}
        onChange={handleCityChange}
      />
      <button className="search-btn" type="submit">
        🔎
      </button>
    </form>
  );
}

export default SearchBar;
