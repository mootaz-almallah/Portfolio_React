import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Add scroll event listener to add background color to header when scrolled
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="#home" className="logo" onClick={closeMenu}>
        Mootaz <span>Almallah</span>
      </Link>
      <i 
        className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} 
        id="menu-icon" 
        onClick={toggleMenu}
      ></i>
      
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <Link to="#home" onClick={closeMenu}>Home</Link>
        <Link to="#about" onClick={closeMenu}>About</Link>
        <Link to="#services" onClick={closeMenu}>Services</Link>
        <Link to="#projects" onClick={closeMenu}>Projects</Link>
        <Link to="#testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link to="#contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;