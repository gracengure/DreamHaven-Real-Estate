import React from "react"; // Importing React library
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route components from react-router-dom
import NavBar from "./components/NavBar"; // Importing NavBar component
import HomePage from "./components/HomePage"; // Importing HomePage component
import PropertyListing from "./components/PropertyListing"; // Importing PropertyListing componen
import PropertySpecs from "./components/PropertySpecs"; // Importing PropertySpecs component
import Contacts from "./components/Contacts"; // Importing Contacts component
import TestimonialsData from "./components/TestimonialData"; // Importing TestimonialsData component
// Function component App
function App() {
  return (
    <div>
      <NavBar />
      {/* Rendering the NavBar component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route for HomePage component */}
        <Route path="/properties" element={<PropertyListing />} />
        {/* Route for PropertyListing component */}
        <Route path="/properties/:propertyId" element={<PropertySpecs />} />
        {/* Route for PropertySpecs component with dynamic propertyId */}
        <Route path="/contacts" element={<Contacts />} />{" "}
        {/* Route for Contacts component */}
        <Route path="/testimonials" element={<TestimonialsData />} />
        {/* Route for TestimonialsData component */}
      </Routes>
      <TestimonialsData />
      <Contacts />
    </div>
  );
}

export default App; // Exporting the App component
