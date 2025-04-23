import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/mootaz-almallah/" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=962789988909" target="_blank" rel="noreferrer">
          <i className="bx bxl-whatsapp-square"></i>
        </a>
        <a href="https://github.com/mootaz-almallah" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="bx bxl-gmail"></i>
        </a>
      </div>

      <ul className="list">
        <li>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">FAQ</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p className="copyright">
        &copy; Mootaz Almallah | All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;