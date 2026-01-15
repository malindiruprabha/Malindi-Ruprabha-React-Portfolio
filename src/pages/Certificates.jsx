import React from "react";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "Power BI for Beginners Microsoft(2025)",
      image: "/images/cer-1.jpg",
      link:"/images/cer-1.jpg",
    },
    {
      title: "Get Started with SQL Analytics and BI on Databricks databricks(2025)",
      image: "/images/cer-2.jpg",
      link:"/images/cer-2.jpg",
    },
    {
      title: "Automate Everything with n8n Lets Upgrade(2025)",
      image: "/images/cer-3.jpg",
      link:"/images/cer-3.jpg",
    },
     {
      title: "Java basic programs Great Learning(2024)",
      image: "/images/cer-4.jpg",
      link:"/images/cer-4.jpg",
    },
     {
      title: "OOP in java course Great Learning(2024)",
      image: "/images/cer-5.jpg",
      link:"/images/cer-5.jpg",
    },
     {
      title: "JDBC in java course Great Learning(2024)",
      image: "/images/cer-6.jpg",
      link:"/images/cer-6.jpg",
    },
      
     {
      title: "Python for Beginners University of Moratuwa(2024)",
      image: "/images/cer-7.jpg",
      link:"/images/cer-7.jpg",

    },
     {
      title: "Certificate of Completion in Computer Literacy Open University of Sri Lanka(2023)",
      image: "/images/cer-8.jpeg",
      link:"/images/cer-8.jpeg",
    },

  ];

  return (
    <section id="certificates" className="certificates-section">
      <h2>Certificates</h2>

      <div className="cert-list">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="cert-item"
          >
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;