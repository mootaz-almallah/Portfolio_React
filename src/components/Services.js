import React from 'react';

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <i className="bx bxs-devices"></i>
            <h4>C++ Programming</h4>
            <p>With expertise in C++, I am adept at developing efficient algorithms and solving complex problems. This versatile language has honed my skills in object-oriented programming, data structures, and performance optimization. Whether for system-level applications or computationally intensive tasks, I use C++ to deliver reliable and high-performance solutions</p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <i className='bx bx-code-alt'></i>
            <h4>Front-End Development</h4>
            <p>I specialize in creating visually appealing and user-friendly interfaces that enhance user experiences. With a strong foundation in HTML, CSS, and JavaScript, I craft responsive and interactive designs that bring ideas to life. My focus is on building modern, accessible, and performance-optimized front-end solutions tailored to meet the needs of clients and users alike.</p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <i className='bx bx-code-curly'></i>
            <h4>Back-End Development</h4>
            <p>From server-side logic to database management, I excel in building robust back-end systems that ensure functionality and scalability. By leveraging tools like Django and MySQL, I create seamless connections between the front end and the server. My goal is to deliver efficient, secure, and maintainable back-end solutions to power web applications effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;