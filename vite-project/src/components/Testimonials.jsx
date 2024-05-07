import React, { useState } from "react";

function Testimonials({ testimonials }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>{testimonials[currentTestimonialIndex].name}</p>
        <p>{testimonials[currentTestimonialIndex].text}</p>
        <img
          src={testimonials[currentTestimonialIndex].image}
          alt={testimonials[currentTestimonialIndex].name}
        />
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
