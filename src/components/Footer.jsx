import React from "react";
import "../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company */}

        <div className="footer-box">
          <h2>SAR Placement Technologies</h2>

          <p>
            We provide industry-focused IT training with live projects,
            placement assistance, and career guidance to help students build
            successful careers.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
          <a href="#">About Us</a>
        </div>

        {/* Courses */}

        <div className="footer-box">
          <h3>Courses</h3>

          <a href="#">MERN Stack</a>
          <a href="#">React JS</a>
          <a href="#">Python</a>
          <a href="#">Java Full Stack</a>
          <a href="#">UI / UX Design</a>
        </div>

        {/* Contact */}

        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>

          <p>
            <FaEnvelope /> info@sarplacement.com
          </p>

          <p>
            <FaMapMarkerAlt /> Namakkal, Tamil Nadu
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SAR Placement Technologies | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
