import React from "react";
import "./Home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Icons
import profileImg from "../assets/profile.jpg";
import cvFile from "../assets/MalindiRuprabhaCV.pdf"; // ✅ Import your CV

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img src={profileImg} alt="Malindi Ruprabha" className="profile-img" />
      <h1>
        Hello, I'm <span>Malindi Ruprabha</span>
      </h1>
      <p>Data Analyst | Business Analyst | Designer | Frontend Developer</p>

      {/* Social icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/malindi-ruprabha-4604b8298/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://github.com/malindiruprabha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github" />
        </a>
      </div>

      {/* ✅ Download CV Button */}
      <a href={cvFile} download className="download-btn">
        Download CV
      </a>
    </section>
  );
};

export default Home;
