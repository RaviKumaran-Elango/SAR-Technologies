import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Course from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Course />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
