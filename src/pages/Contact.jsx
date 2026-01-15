import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wz3bwtj", // ✅ Your EmailJS Service ID
        "template_dk5p85x", // ✅ Your EmailJS Template ID
        {
          name: formData.name,        // must match {{name}} in your template
          user_email: formData.email, // must match {{user_email}} in your template
          message: formData.message,  // must match {{message}} in your template
        },
        "X0zxMPwaftINuj3ig" // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("❌ Error:", error);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
