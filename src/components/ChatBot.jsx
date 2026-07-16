import { useState } from "react";
import "../styles/ChatBot.css";
import chatbotIcon from "../source/bot.png";

const courseData = {
  "MERN Stack": {
    duration: "4 Months",
    details:
      "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, JWT, Live Projects.",
  },
  "React JS": {
    duration: "45 Days",
    details:
      "React Basics, Hooks, Routing, Redux Toolkit, API Integration & Live Project.",
  },
  Python: {
    duration: "3 Months",
    details: "Python, Django, REST API, MySQL & Live Project.",
  },
  Java: {
    duration: "4 Months",
    details: "Core Java, Spring Boot, Hibernate & React.",
  },
  "UI/UX": {
    duration: "2 Months",
    details: "Figma, Wireframe, Prototype & Portfolio.",
  },
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [error, setError] = useState("");

  const whatsapp = () => {
    const message = `New Admission Enquiry

Name : ${name}
Phone : ${phone}
Email : ${email}
Course : ${course}`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        <img src={chatbotIcon} alt="chatbot" />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat">
          <div className="chat-header">
            <h2>SAR AI Assistant</h2>

            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          {step === 1 && (
            <>
              <p>👋 Welcome to SAR Placement Technologies.</p>

              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button
                onClick={() => {
                  if (name.trim() === "") {
                    alert("Please enter your name.");
                    return;
                  }

                  setStep(2);
                }}
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p>📱 Enter Mobile Number</p>

              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  // Numbers மட்டும் allow
                  const value = e.target.value.replace(/\D/g, "");
                  setPhone(value);
                  setError("");
                }}
              />

              {error && <span className="error">{error}</span>}

              <button
                onClick={() => {
                  if (phone.trim() === "") {
                    setError("⚠ Please enter your mobile number.");
                    return;
                  }

                  if (phone.length !== 10) {
                    setError("⚠ Mobile number must be 10 digits.");
                    return;
                  }

                  setStep(3);
                }}
              >
                Next
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <p>📧 Enter Email Address</p>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />

              {error && <span className="error">{error}</span>}

              <button
                onClick={() => {
                  if (email.trim() === "") {
                    setError("⚠ Please enter your email address.");
                    return;
                  }

                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!emailRegex.test(email)) {
                    setError("⚠ Please enter a valid email address.");
                    return;
                  }

                  setError("");
                  setStep(4);
                }}
              >
                Next
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <p>📚 Select Your Course</p>

              {error && <span className="error">{error}</span>}

              {Object.keys(courseData).map((item) => (
                <button
                  className="course-btn"
                  key={item}
                  onClick={() => {
                    setCourse(item);
                    setError("");
                    setStep(5);
                  }}
                >
                  📘 {item}
                </button>
              ))}
            </>
          )}

          {step === 5 && (
            <>
              <h3>📚 {course}</h3>

              <p>
                <strong>⏳ Duration:</strong> {courseData[course].duration}
              </p>

              <p>{courseData[course].details}</p>

              <button
                onClick={() => {
                  setStep(6);
                }}
              >
                I'm Interested
              </button>
            </>
          )}

          {step === 6 && (
            <>
              <h3>🎉 Registration Completed</h3>

              <p>
                Thank you <strong>{name}</strong> 😊
              </p>

              <p>Our admission counselor will contact you soon.</p>

              <button onClick={whatsapp}>📲 Send to WhatsApp</button>

              <button
                className="secondary-btn"
                onClick={() => {
                  setStep(1);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setCourse("");
                  setError("");
                }}
              >
                🔄 New Enquiry
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
