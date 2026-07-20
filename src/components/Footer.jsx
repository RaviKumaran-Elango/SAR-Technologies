import React from "react";
import { Link } from "react-router-dom";
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
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Courses */}
        <div className="footer-box">
          <h3>Courses</h3>

          <Link to="https://www.mongodb.com/resources/languages/mern-stack">
            MERN Stack
          </Link>
          <Link to="https://react.dev/">React JS</Link>
          <Link to="https://www.python.org/">Python</Link>
          <Link to="https://www.geeksforgeeks.org/advance-java/java-full-stack/">
            Java Full Stack
          </Link>
          <Link to="https://www.geeksforgeeks.org/blogs/difference-between-ui-and-ux-design/">
            UI / UX Design
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt /> <a href="tel:+919876543210">+91 98765 43210</a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a href="mailto:info@sarplacement.com">info@sarplacement.com</a>
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
