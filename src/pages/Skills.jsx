import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills & Tools</h2>

      <div className="skills-container">
        {/* Skills */}
        <div className="skills-card">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React.js</li>
            <li><FaNodeJs /> Node.js</li>
            <li><FaPython /> Python</li>
            <li><FaJava /> Java</li>
            <li><FaDatabase /> MySQL / MongoDB</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3>Tools & Platforms</h3>
          <ul className="skills-list">
            <li><FaFigma /> Figma</li>
            <li><FaGitAlt /> Git & GitHub</li>
            <li>VS Code</li>
            <li>Canva</li>
            <li>Power BI</li>
            <li>Excel</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
