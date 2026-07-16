import React from "react";
import "../styles/Course.css";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPaintBrush,
  FaDatabase,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaReact />,
    title: "React JS",
    duration: "Duration : 45 Days",
    description: "Learn React from basics to advanced with live projects.",
    color: "#61DBFB",
  },
  {
    icon: <FaNodeJs />,
    title: "MERN Stack",
    duration: "Duration : 4 Months",
    description:
      "Build full-stack applications using MongoDB, Express, React & Node.",
    color: "#3C873A",
  },
  {
    icon: <FaPython />,
    title: "Python Full Stack",
    duration: "Duration : 3 Months",
    description: "Master Python, Django, APIs and database development.",
    color: "#3776AB",
  },
  {
    icon: <FaJava />,
    title: "Java Full Stack",
    duration: "Duration : 4 Months",
    description: "Core Java, Spring Boot, Hibernate and React integration.",
    color: "#F89820",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    duration: "Duration : 2 Months",
    description: "Learn Figma, Wireframing, Prototyping and Design Systems.",
    color: "#A855F7",
  },
  {
    icon: <FaDatabase />,
    title: "SQL & MongoDB",
    duration: "Duration : 30 Days",
    description: "Master relational and NoSQL databases for real projects.",
    color: "#2563EB",
  },
];

function Course() {
  return (
    <section className="course-section" id="courses">
      <h1>Our Popular Courses</h1>
      <p>
        Industry-focused training programs designed to help students become
        job-ready.
      </p>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div
              className="course-icon"
              style={{ background: `${course.color}20`, color: course.color }}
            >
              {course.icon}
            </div>

            <h2>{course.title}</h2>

            <h4>{course.duration}</h4>

            <p>{course.description}</p>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Course;
