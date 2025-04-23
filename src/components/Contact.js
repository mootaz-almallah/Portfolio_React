import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    alert("Message sent successfully!");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-groub">
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Full Name" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input 
              type="tel" 
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-groub-2">
          <textarea 
            name="message" 
            cols="30" 
            rows="30" 
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
}

export default Contact;