import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="tag">🚀 Start Your IT Career Today</span>

        <h1>
          Learn Today,
          <br />
          <span>Get Placed Tomorrow.</span>
        </h1>

        <p>
          SAR Placement Technologies provides industry-ready training in MERN
          Stack, React JS, Python, Java, UI/UX Design and Placement Assistance
          to help students achieve their dream IT career.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Courses</button>
          <button className="secondary-btn">Contact Us</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>25+</h2>
            <p>Courses</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Placement Support</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
          alt="Students Learning"
        />
      </div>
    </section>
  );
}

export default Home;
