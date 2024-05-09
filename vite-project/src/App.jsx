import React from 'react';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import PropertyListing from "./components/PropertyListing";
import Contacts from "./components/Contacts";
import TestimonialsData from './components/TestimonialData';


function App() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      
      <PropertyListing/>
      
      <TestimonialsData />
      <Contacts/>
    </div>
    
  );
}

export default App;