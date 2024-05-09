import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import PropertyListing from "./components/PropertyListing";
import Contacts from "./components/Contacts";
import TestimonialsData from './components/TestimonialData';
import PropertySpecs from './components/PropertySpecs'; // Import PropertySpecs component

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/properties/:propertyId" element={<PropertySpecs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/testimonials" element={<TestimonialsData />} />
      </Routes>
    </div>
  );
}

export default App;
