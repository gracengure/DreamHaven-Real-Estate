import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import PropertyListing from "./components/PropertyListing";
import PropertySpecs from './components/PropertySpecs';
import Contacts from "./components/Contacts";
import TestimonialsData from './components/TestimonialData';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/properties/:propertyId" element={<PropertySpecs />} />
      </Routes>
      <TestimonialsData />
      <Contacts />
    </div>
  );
}

export default App;
