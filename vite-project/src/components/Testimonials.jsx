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
      <h2>Testimonials carousel - cards comments</h2>
      <div className="testimonial">
        <div></div>
        <h1>{testimonials[currentTestimonialIndex].name}</h1>
        <img
          src={testimonials[currentTestimonialIndex].image}
          alt={testimonials[currentTestimonialIndex].name}
        />
        <p>{testimonials[currentTestimonialIndex].text}</p>
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
