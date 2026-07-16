import React from "react";
import "../styles/Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out to us for course details,
          admissions, or placement support.
        </p>
      </div>

      <div className="contact-container">
        {/* Left */}

        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>Namakkal, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>info@sartechnologies.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaClock className="icon" />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 9.00 AM - 6.00 PM</p>
            </div>
          </div>
        </div>

        {/* Right */}

        <form className="contact-form">
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
