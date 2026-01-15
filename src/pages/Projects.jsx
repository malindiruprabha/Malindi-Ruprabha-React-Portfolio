import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis using python",
      description:
        "A Python project for data analysis and visualization using Pandas and Matplotlib.",
      link: "https://github.com/malindiruprabha/Data-Analysis-using-python",
    },
    {
      title: "Titanic Dataset Analysis",
      description:
        "Analysis of the Titanic dataset to predict survival rates using machine learning techniques.",
      link: "https://github.com/malindiruprabha/-Titanic-Dataset",
    },
    {
      title: "Event Management System-Analytics using SQL",
      description:
        "SQL-based analytics for an event management system to track attendance and feedback.",
      link: "https://github.com/malindiruprabha/event-management-system-sql",
    },
    {
      title: "Excel Dashboard for Data-Visualization",
      description:
        "Smart Excel Dashboard with ChatGPT for data visualization and analysis.",
      link: "https://github.com/malindiruprabha/Excel-Dashboard",
    },
    {
      title: "Financial Sales & Executive Performance Dashboard",
      description:
        "An interactive dashboard to monitor financial sales and executive performance metrics.",
      link: "https://app.powerbi.com/groups/me/reports/cbf7453e-2b2e-485e-9b3a-996e81949c9f/2854ef5128ee2202676b?experience=power-bi",
    },
    {
      title: "Financial Insights Dashboard",
      description:
        "A Power BI dashboard providing insights into financial data and trends.",
      link: "https://app.powerbi.com/groups/me/reports/49c80631-539a-41c0-af82-71f6d2b32931/8cd56c5a209e09629ed2?experience=power-bi",
    },
    {
      title: "Predictive Income and Repair Time Analytics and Forecasting System for Multi9 Computer Shop (Our Ongoing 3rd Year Project)",
      description:
        "A comprehensive analytics and forecasting system to predict income and repair times for a computer shop.",
      link: "https://github.com/Chamodi27s/Predictive-Income-and-Repair-Time-Analytics-and-Forecasting-System-for-Multi9-Computer-Systems",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View on Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
