import React, { useEffect, useState } from "react"; // Importing React, useEffect, and useState from react library
// Function component Testimonials
function Testimonials({ testimonials }) {
  // State variable to store index of current testimonial being displayed
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  // State variable to store edited testimonial data
  const [editedTestimonial, setEditedTestimonial] = useState({
    name: "",
    text: "",
    image: "",
  });
  //Effect to update editedTestimonial when currentTestimonialIndex or testimonials change
  useEffect(() => {
    setEditedTestimonial(testimonials[currentTestimonialIndex]); // Setting edited testimonial based on current index
  }, [currentTestimonialIndex, testimonials]);
  // Function to handle displaying the next testimonial
  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  // Function to handle displaying the previous testimonial
  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  // Function to handle input change in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTestimonial((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Function to handle updating testimonial data
  const handleUpdate = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    const updatedTestimonials = testimonials.map((testimonial, index) => {
      if (index === currentTestimonialIndex) {
        return editedTestimonial; // Updating the edited testimonial
      }
      return testimonial;
    });
    console.log(updatedTestimonials); // Logging updated testimonials to console
  };
  // Rendering JSX for Testimonials component
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
              value={editedTestimonial.name} // Input value bound to edited testimonial name
              onChange={handleInputChange} // Handling input change
            />

            <input
              className="text-update"
              type="text"
              name="text"
              value={editedTestimonial.text} // Input value bound to edited testimonial text
              onChange={handleInputChange} // Handling input change
            />
            <input
              className="image-update"
              type="text"
              name="image"
              value={editedTestimonial.image} // Input value bound to edited testimonial image
              onChange={handleInputChange} // Handling input change
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
export default Testimonials; // Exporting the Testimonials component
