
// Importing Instagram icon from react-icons/fa library
import { FaInstagramSquare } from "react-icons/fa";
// Importing Facebook icon from react-icons/fa library
import { FaFacebookSquare } from "react-icons/fa";
// Importing Telegram icon from react-icons/bi library
import { BiLogoTelegram } from "react-icons/bi";
// Importing TikTok icon from react-icons/ai library
import { AiFillTikTok } from "react-icons/ai";

// Contact component definition
const Contact = () => {
  // Google Maps source URL
  const googleMapsSrc = "https://www.google.com/maps/d/embed?mid=1xmEOp534MOV24OzCYrcLPCvCfDifD2Sb"

  return (
    // Contact card container
    <div className="contact-card">
      {/* Contact Us heading */}
      <h1 id="contact">Contact Us</h1>
      {/* Contact form section */}
      <div className="contact-form">
        {/* Contact form heading */}
        <h2>Contact Form</h2>
        {/* Contact form */}
        <form>
          {/* Name input field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          {/* Email input field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* Message input field */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Contact information section */}
      <div className="contact-info">
        {/* Our Location heading */}
        <h2>Our Location</h2>
        {/* Google Maps iframe */}
        <div className="map-container">
          <iframe
            title="Google Maps"
            src={googleMapsSrc}
            style={{ border: 0 }}
            width="100%"
            height="300" 
            allowFullScreen
            loading="lazy"
          />
        </div>
        {/* Follow Us heading */}
        <h2>Follow Us</h2>
        {/* Social media links */}
        <div className="social-media-links">
          {/* Instagram link */}
          <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            {/* Instagram icon */}
            <FaInstagramSquare />
          </a>
          {/* Facebook link */}
          <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
            {/* Facebook icon */}
            <FaFacebookSquare />
          </a>
          {/* Telegram link */}
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            {/* Telegram icon */}
            <BiLogoTelegram />
          </a>
          {/* TikTok link */}
          <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
            {/* TikTok icon */}
            <AiFillTikTok />
          </a>
        </div>
      </div>
    </div>
  );        
};

// Exporting Contact component
export default Contact;
