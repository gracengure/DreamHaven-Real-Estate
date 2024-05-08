// import React, { useState } from "react";

// function Testimonials({ testimonials }) {
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentTestimonialIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentTestimonialIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="testimonials">
//       <h2>Testimonials carousel - cards comments</h2>
//       <div className="testimonial">
//         <h1>{testimonials[currentTestimonialIndex].name}</h1>
//         <img
//           className="images"
//           src={testimonials[currentTestimonialIndex].image}
//           alt={testimonials[currentTestimonialIndex].name}
//         />
//         <p>{testimonials[currentTestimonialIndex].text}</p>
//       </div>
//       <div>
//         <button onClick={handlePrev}>Prev</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;

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
      <div className="testimonial-card">
        <div className="testimonial">
          <h3>Name:  {testimonials[currentTestimonialIndex].name}</h3>
          <img
            className="testimonial-image"
            src={testimonials[currentTestimonialIndex].image}
            alt={testimonials[currentTestimonialIndex].name}
          />
          <p className="testimonial-text">
            {testimonials[currentTestimonialIndex].text}
          </p>
        </div>
      </div>
      <div className="testimonial-controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;

