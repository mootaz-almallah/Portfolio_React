import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/finally2.jpg" alt="graduation" />
      </div>

      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>I'm mootaz abdulreaheem  kamel almallah , a 24-year-old Computer Information Systems graduate from Yarmouk University . With a strong passion for software development, I enjoy creating solutions that combine functionality and creativity. Beyond coding, I'm an athlete who loves football, basketball, and table tennis. I'm always eager to learn, grow, and take on new challenges in the tech world.</p>
        <h3><span>Skills</span></h3>
        <div className="skills">
          <ul>
            <li>
              <span><i className='bx bx-chevron-right'></i>HTML</span>
            </li>
            <li>
              <span><i className='bx bx-chevron-right'></i>CSS</span>
            </li>
            <li>
              <span><i className='bx bx-chevron-right'></i>JavaScript</span>
            </li>
          </ul>
          <ul>
            <li>
              <span><i className='bx bx-chevron-right'></i>React</span>
            </li>
            <li>
              <span><i className='bx bx-chevron-right'></i>Node</span>
            </li>
            <li>
              <span><i className='bx bx-chevron-right'></i>MYSQL</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;