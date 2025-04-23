import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Mootaz</span></h1>
        <h3>I'm a <span>Full Stack Developer</span></h3>
        <p>I'm a passionate Computer Information Systems graduate with a keen interest in software development and technology. Here, you'll find a showcase of my projects, skills, and achievements that reflect my dedication to continuous learning and innovation. Explore my journey and discover how I bring ideas to life through code.</p>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/ahmad-abdelghani-385716237/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=962789988909" target="_blank" rel="noreferrer">
            <i className="bx bxl-whatsapp-square"></i>
          </a>
          <a href="https://github.com/AhmadAbdelghani02" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:Abdelghani.Ahmad02@gmail.com" target="_blank" rel="noreferrer">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
        <a href="#contact" className="btn">Contact</a>
      </div>

      <div className="home-img">
        <img src="/images/finaly.png" alt="Personal" />
      </div>
    </section>
  );
}

export default Home;