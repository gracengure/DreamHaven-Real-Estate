
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";

const Contact = () => {
  
  const googleMapsSrc = "https://www.google.com/maps/d/embed?mid=1xmEOp534MOV24OzCYrcLPCvCfDifD2Sb"

  return (
     <div className="contact-card">
      <h1>Contact Us</h1>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Our Location</h2>
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

        <h2>Follow Us</h2>
        <div className="social-media-links">
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaFacebookSquare />
            <BiLogoTelegram />
            <AiFillTikTok />
        </div>
      </div>
    </div>
  );        
};

export default Contact;

