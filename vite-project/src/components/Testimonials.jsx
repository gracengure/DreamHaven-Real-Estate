import React, { useEffect, useState } from "react";

function Testimonials({ testimonials }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [editedTestimonial, setEditedTestimonial] = useState({
    name: "",
    text: "",
    image: "",
  });
  useEffect(() => {
    setEditedTestimonial(testimonials[currentTestimonialIndex]);
  }, [currentTestimonialIndex, testimonials]);
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTestimonial((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTestimonials = testimonials.map((testimonial, index) => {
      if (index === currentTestimonialIndex) {
        return editedTestimonial;
      }
      return testimonial;
    });
    console.log(updatedTestimonials);
  };

  return (
    <div className="testimonials">
      <h2 id="testimonials">Testimonials </h2>
      <div className="testimonial-card">
        <div className="testimonial">
          <h3>Name: {editedTestimonial.name}</h3>
          <img
            className="testimonial-image"
            src={editedTestimonial.image}
            alt={editedTestimonial.name}
          />
          <p className="testimonial-text">{editedTestimonial.text}</p>
          <form onSubmit={handleUpdate} className="update-form">
            <h2>Edit testimonials</h2>
            <input
              className="name-update"
              type="text"
              name="name"
              value={editedTestimonial.name}
              onChange={handleInputChange}
            />
            <input
              className="text-update"
              type="text"
              name="text"
              value={editedTestimonial.text}
              onChange={handleInputChange}
            />
            <input
              className="image-update"
              type="text"
              name="image"
              value={editedTestimonial.image}
              onChange={handleInputChange}
            />
            <button type="submit" className="edit-button">
              Edit
            </button>
          </form>
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